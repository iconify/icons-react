import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/b/blo41m3ob.css';
import '../../css/u/u4qnnrb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="fr_tmn9fp"/><path class="blo41m3ob"/><path class="u4qnnrb5s"/></g>`,
		"fallback": "solar:camera-broken",
	});
}

export default Component;
