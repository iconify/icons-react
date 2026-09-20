import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/k/kcsuak.css';
import '../../css/y/yp2axg.css';
import '../../css/f/fill-from-0.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew kcsuak"/><path class="iw1iew yp2axg"/>`,
		"fallback": "line-md:confirm-circle-to-circle-twotone-transition",
	});
}

export default Component;
