import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/syqbndbck.css';
import '../../css/z/zdzqnkbnl.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/x/xtsrmvj7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="syqbndbck"/><path class="zdzqnkbnl"/><circle class="fr_tmn9fp"/><circle class="xtsrmvj7o"/></g>`,
		"fallback": "hugeicons:google-lens",
	});
}

export default Component;
