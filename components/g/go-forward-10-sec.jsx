import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z2v799ugg.css';
import '../../css/g/gx_xqcbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z2v799ugg"/><path class="gx_xqcbum"/></g>`,
		"fallback": "hugeicons:go-forward-10-sec",
	});
}

export default Component;
