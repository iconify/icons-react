import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yn02h8b2q.css';
import '../../css/q/q8k6jfbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yn02h8b2q"/><path class="q8k6jfbtx"/></g>`,
		"fallback": "iconoir:bitcoin-circle",
	});
}

export default Component;
