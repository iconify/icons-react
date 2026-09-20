import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xg6irgbug.css';
import '../../css/n/nqp9kabbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xg6irgbug"/><path class="nqp9kabbw"/></g>`,
		"fallback": "streamline-cyber:cursor-scroll-2",
	});
}

export default Component;
