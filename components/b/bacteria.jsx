import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l_9foyrin.css';
import '../../css/t/t81lg1b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="l_9foyrin"/><path class="t81lg1b8u"/></g>`,
		"fallback": "streamline-cyber:bacteria",
	});
}

export default Component;
