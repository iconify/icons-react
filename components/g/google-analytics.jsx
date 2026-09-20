import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h22y-lv-g.css';
import '../../css/f/fwk_nlbjb.css';

const viewBox = {"width":2195.9,"height":2430.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h22y-lv-g"/><path class="fwk_nlbjb"/>`,
		"fallback": "thesvg-color:google-analytics",
	});
}

export default Component;
