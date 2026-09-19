import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zls1_oujj.css';
import '../../css/v/vayd_bcgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="zls1_oujj"/><path class="vayd_bcgk"/></g>`,
		"fallback": "hugeicons:google-maps",
	});
}

export default Component;
