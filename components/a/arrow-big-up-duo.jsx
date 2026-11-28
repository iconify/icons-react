import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n97hkd6ve.css';
import '../../css/f/f_ua4blav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n97hkd6ve secondary"/><path class="f_ua4blav primary"/>`,
		"fallback": "iconaut:arrow-big-up-duo",
	});
}

export default Component;
