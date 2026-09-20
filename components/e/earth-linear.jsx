import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y-ioddvys.css';
import '../../css/y/y44uunbxa.css';
import '../../css/u/uvx097b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y-ioddvys"/><path class="y44uunbxa"/><path class="uvx097b-d"/></g>`,
		"fallback": "solar:earth-linear",
	});
}

export default Component;
