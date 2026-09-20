import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vun63ebyc.css';
import '../../css/x/xen266bam.css';
import '../../css/s/s37u5-ydv.css';
import '../../css/h/hq1a5ot7c.css';
import '../../css/s/s-uhjzbhu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGeU7gcdTO" x1="30.58" x2="17.816" y1="13.808" y2="26.573" gradientUnits="userSpaceOnUse"><stop offset=".15" class="vun63ebyc"/><stop offset=".85" class="xen266bam"/></linearGradient></defs><path class="s37u5-ydv"/><path class="hq1a5ot7c"/><path fill="url(#SVGeU7gcdTO)" class="s-uhjzbhu"/>`,
		"fallback": "material-icon-theme:folder-turborepo-open",
	});
}

export default Component;
