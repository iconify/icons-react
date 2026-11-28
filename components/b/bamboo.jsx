import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dh1ukibik.css';
import '../../css/a/a4jv2kb1u.css';
import '../../css/u/uni0xsbld.css';
import '../../css/s/s6d4vbbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dh1ukibik"/><path class="a4jv2kb1u"/><path class="uni0xsbld"/><path class="s6d4vbbae"/></g>`,
		"fallback": "iconaut:bamboo",
	});
}

export default Component;
