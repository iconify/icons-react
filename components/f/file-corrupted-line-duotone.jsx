import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8sr0bcyc.css';
import '../../css/p/pija81m1h.css';
import '../../css/q/q76w7c8rz.css';
import '../../css/f/fwg6wi_3u.css';
import '../../css/x/xe403ub-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8sr0bcyc"/><path class="pija81m1h"/><path class="q76w7c8rz"/><path class="fwg6wi_3u"/><path class="xe403ub-o"/></g>`,
		"fallback": "solar:file-corrupted-line-duotone",
	});
}

export default Component;
