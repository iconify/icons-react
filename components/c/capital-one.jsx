import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy8_nmbyv.css';
import '../../css/c/c7mlw_bkb.css';

const viewBox = {"width":418,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy8_nmbyv"/><path class="c7mlw_bkb"/>`,
		"fallback": "thesvg-color:capital-one",
	});
}

export default Component;
