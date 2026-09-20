import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yt58n6j6w.css';
import '../../css/m/myjee8b0b.css';
import '../../css/c/cqr0ngbfu.css';
import '../../css/n/n72fxw10p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yt58n6j6w"/><path class="myjee8b0b"/><path class="cqr0ngbfu"/><path class="n72fxw10p"/></g>`,
		"fallback": "solar:flashlight-line-duotone",
	});
}

export default Component;
