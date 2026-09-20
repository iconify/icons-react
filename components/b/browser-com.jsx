import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/caw0cvbkn.css';
import '../../css/y/ye_i5tq4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="caw0cvbkn"/><path class="ye_i5tq4x"/></g>`,
		"fallback": "streamline-ultimate:browser-com",
	});
}

export default Component;
