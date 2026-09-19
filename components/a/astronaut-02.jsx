import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ybew17vjq.css';
import '../../css/z/zq76fcr2o.css';
import '../../css/u/u6ygjob9u.css';
import '../../css/c/cwuav_3gm.css';
import '../../css/m/me2l9ibhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="ybew17vjq"/><ellipse class="zq76fcr2o"/><path class="u6ygjob9u"/><path class="cwuav_3gm"/><path class="me2l9ibhj"/></g>`,
		"fallback": "hugeicons:astronaut-02",
	});
}

export default Component;
