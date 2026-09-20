import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/o/odwtxx.css';
import '../../css/c/c2eg-p.css';
import '../../css/s/so-from-8.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew odwtxx"/><path class="c2eg-p iw1iew"/>`,
		"fallback": "line-md:computer-twotone",
	});
}

export default Component;
