import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zscdv2etd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zscdv2etd"/>`,
		"fallback": "teenyicons:compass-outline",
	});
}

export default Component;
