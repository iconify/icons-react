import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/c2ln7vuvt.css';
import '../../css/x/xppl1n1ro.css';
import '../../css/a/ajxlmhv5v.css';
import '../../css/s/s1_4f3ber.css';
import '../../css/y/y6-m6hbic.css';
import '../../css/u/uubpn-45c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="c2ln7vuvt wm-shadow"/><path class="xppl1n1ro"/><path class="ajxlmhv5v"/><path class="s1_4f3ber"/><path class="wm-shine y6-m6hbic"/><path class="uubpn-45c wm-deco"/></g>`,
		"fallback": "withicons-sticker:heart",
	});
}

export default Component;
