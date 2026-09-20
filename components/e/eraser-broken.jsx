import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aas262bjp.css';
import '../../css/b/b6sm2vv4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aas262bjp"/><path class="b6sm2vv4h"/></g>`,
		"fallback": "solar:eraser-broken",
	});
}

export default Component;
