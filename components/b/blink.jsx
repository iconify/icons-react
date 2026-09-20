import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfyllwbid.css';
import '../../css/y/yklxlcb9b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfyllwbid"/><path class="yklxlcb9b"/>`,
		"fallback": "material-icon-theme:blink",
	});
}

export default Component;
