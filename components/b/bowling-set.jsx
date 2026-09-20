import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jb-nsc-ss.css';
import '../../css/z/z1hb57k7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jb-nsc-ss"/><path class="z1hb57k7w"/></g>`,
		"fallback": "streamline-ultimate:bowling-set",
	});
}

export default Component;
