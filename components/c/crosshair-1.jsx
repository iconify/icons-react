import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/haz6mub2y.css';
import '../../css/d/dupi9nrhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="haz6mub2y"/><path class="dupi9nrhf"/></g>`,
		"fallback": "streamline-cyber:crosshair-1",
	});
}

export default Component;
