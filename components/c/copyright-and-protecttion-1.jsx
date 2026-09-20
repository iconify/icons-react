import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y9eekiq5u.css';
import '../../css/p/pwxw9515l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y9eekiq5u"/><path class="pwxw9515l"/></g>`,
		"fallback": "streamline-ultimate:copyright-and-protecttion-1",
	});
}

export default Component;
