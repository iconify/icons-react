import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h38u9um-k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h38u9um-k"/>`,
		"fallback": "teenyicons:google-streetview-outline",
	});
}

export default Component;
