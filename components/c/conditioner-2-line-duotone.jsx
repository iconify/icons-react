import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c510gibxl.css';
import '../../css/z/zksc_7zmr.css';
import '../../css/w/wm9jnnb5f.css';
import '../../css/y/yasfyvbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c510gibxl"/><path class="zksc_7zmr"/><path class="wm9jnnb5f"/><path class="yasfyvbyk"/></g>`,
		"fallback": "solar:conditioner-2-line-duotone",
	});
}

export default Component;
