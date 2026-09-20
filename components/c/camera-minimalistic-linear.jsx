import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/j/jot55yhti.css';
import '../../css/x/x4pob2bni.css';
import '../../css/b/bcpsrtbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="fr_tmn9fp"/><path class="jot55yhti"/><path class="x4pob2bni"/><path class="bcpsrtbhb"/></g>`,
		"fallback": "solar:camera-minimalistic-linear",
	});
}

export default Component;
