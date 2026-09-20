import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra8x7z.css';
import '../../css/a/a0m25c.css';
import '../../css/q/qjmzsy.css';
import '../../css/c/cn_flp.css';
import '../../css/l/l_ywrm.css';
import '../../css/x/x27gon.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra8x7z"/><path class="a0m25c qjmzsy"/><path class="a0m25c cn_flp"/><path class="a0m25c l_ywrm"/><path class="a0m25c x27gon"/>`,
		"fallback": "line-md:cloud-up-twotone",
	});
}

export default Component;
