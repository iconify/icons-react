import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z5l_mobdk.css';
import '../../css/g/g121b32ky.css';
import '../../css/e/etg41e6bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z5l_mobdk"/><path class="g121b32ky"/><path class="etg41e6bw"/></g>`,
		"fallback": "solar:add-broken",
	});
}

export default Component;
