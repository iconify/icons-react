import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rg5apqxys.css';
import '../../css/g/gi6nexo9p.css';
import '../../css/d/d4va52zkr.css';
import '../../css/l/lg1zcpg4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rg5apqxys"/><path class="gi6nexo9p"/><path class="d4va52zkr"/><path class="lg1zcpg4d"/></g>`,
		"fallback": "solar:corkscrew-broken",
	});
}

export default Component;
