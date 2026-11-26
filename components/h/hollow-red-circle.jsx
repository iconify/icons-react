import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptrq_tz8w.css';
import '../../css/w/wr4q_kbqj.css';
import '../../css/x/xu8d8i99b.css';
import '../../css/s/spdhgdcyz.css';
import '../../css/i/i1x8s-47j.css';
import '../../css/d/doi6-kltj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGRAwqnduo" cx="79.6" cy="70.8" r="116.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="ptrq_tz8w"/><stop offset=".85" class="wr4q_kbqj"/><stop offset="1" class="wr4q_kbqj"/></radialGradient></defs><path class="xu8d8i99b"/><path fill="url(#SVGRAwqnduo)" transform="matrix(3 0 0 3 -43.539 -43.539)" class="spdhgdcyz"/><path class="i1x8s-47j"/><path class="doi6-kltj"/>`,
		"fallback": "xero-emoji:hollow-red-circle",
	});
}

export default Component;
