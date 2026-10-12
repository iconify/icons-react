import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puwomltkq.css';
import '../../css/w/weva54bwa.css';
import '../../css/p/p7p0_0bwx.css';
import '../../css/v/v-cwp480a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puwomltkq"/><path class="weva54bwa"/><rect transform="rotate(-90 7.33 5.59)" class="p7p0_0bwx"/><path class="v-cwp480a"/></g>`,
		"fallback": "andrsrxn:clipboard-check",
	});
}

export default Component;
