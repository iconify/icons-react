import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q7twulyci.css';
import '../../css/b/bf9hqaclw.css';
import '../../css/e/ec_xsy4gs.css';
import '../../css/v/vp8fcsdcn.css';
import '../../css/z/z5-el507a.css';
import '../../css/b/bi512rpan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q7twulyci"/><circle class="bf9hqaclw"/><circle class="ec_xsy4gs"/><path class="vp8fcsdcn"/><path class="z5-el507a"/><path class="bi512rpan"/></g>`,
		"fallback": "hugeicons:container-truck",
	});
}

export default Component;
