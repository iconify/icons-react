import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr2yy5z0x.css';
import '../../css/y/yjzc7mbse.css';
import '../../css/d/djvmn3k0y.css';
import '../../css/p/pn0xcxbsb.css';
import '../../css/n/nm6muegmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mr2yy5z0x"/><path class="yjzc7mbse"/><path class="djvmn3k0y"/><path class="pn0xcxbsb"/><path class="nm6muegmk"/></g>`,
		"fallback": "streamline-cyber-color:hourglass-2",
	});
}

export default Component;
