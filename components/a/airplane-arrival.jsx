import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lgv3plbgc.css';
import '../../css/y/yf7lrqbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="lgv3plbgc"/><path class="yf7lrqbiw"/></g>`,
		"fallback": "streamline-cyber:airplane-arrival",
	});
}

export default Component;
