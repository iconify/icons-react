import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/d/dmfni0bso.css';
import '../../css/t/t-007b-3c.css';
import '../../css/a/asumerb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="dmfni0bso"/><path class="t-007b-3c"/><path class="asumerb4v"/></g>`,
		"fallback": "solar:inbox-line-linear",
	});
}

export default Component;
