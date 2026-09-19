import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a22h55oqv.css';
import '../../css/w/ww2rfph8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a22h55oqv"/><path class="ww2rfph8i"/></g>`,
		"fallback": "hugeicons:fingerprint-scan",
	});
}

export default Component;
