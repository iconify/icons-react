import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo4ib6bml.css';
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
		"content": `<circle class="mo4ib6bml"/><path class="hfyllwbid"/><path class="yklxlcb9b"/>`,
		"fallback": "material-icon-theme:blink-light",
	});
}

export default Component;
