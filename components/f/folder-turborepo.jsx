import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vun63ebyc.css';
import '../../css/x/xen266bam.css';
import '../../css/d/dypv3-mdc.css';
import '../../css/q/qa4xkpbrd.css';
import '../../css/x/xo4glgvtf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGmQwji3QR" x1="7.645" x2="4.454" y1="3.452" y2="6.643" gradientUnits="userSpaceOnUse"><stop offset=".15" class="vun63ebyc"/><stop offset=".85" class="xen266bam"/></linearGradient></defs><path class="dypv3-mdc"/><path class="qa4xkpbrd"/><path fill="url(#SVGmQwji3QR)" class="xo4glgvtf"/>`,
		"fallback": "material-icon-theme:folder-turborepo",
	});
}

export default Component;
