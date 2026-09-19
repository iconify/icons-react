import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mwqjmhb_t.css';
import '../../css/w/wpo6wibuz.css';
import '../../css/c/c9qeufl8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mwqjmhb_t"/><path class="wpo6wibuz"/><path class="c9qeufl8i"/></g>`,
		"fallback": "hugeicons:dish-02",
	});
}

export default Component;
