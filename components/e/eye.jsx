import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e_mwwy5eb.css';
import '../../css/m/mt2762bhd.css';
import '../../css/r/r_zyj23eo.css';
import '../../css/n/ndsrwmbkq.css';
import '../../css/g/gqi-lv2mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e_mwwy5eb wm-shadow"/><path class="mt2762bhd wm-shadow"/><path class="r_zyj23eo"/><path class="ndsrwmbkq"/><path class="gqi-lv2mu"/></g>`,
		"fallback": "withicons-brutal:eye",
	});
}

export default Component;
