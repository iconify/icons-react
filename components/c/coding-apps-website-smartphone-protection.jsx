import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m38kuougp.css';
import '../../css/p/p-gvo6b8i.css';
import '../../css/o/o_zvveb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m38kuougp"/><path class="p-gvo6b8i"/><path class="o_zvveb0n"/></g>`,
		"fallback": "streamline-ultimate:coding-apps-website-smartphone-protection",
	});
}

export default Component;
