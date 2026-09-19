import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8ni2pbdc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8ni2pbdc"/>`,
		"fallback": "fluent-mdl2:i-r-m-forward-mirrored",
	});
}

export default Component;
