import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xps_-5liz.css';
import '../../css/u/uio6ieb3k.css';
import '../../css/l/lpzl-7giy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xps_-5liz"/><path class="uio6ieb3k"/><path class="lpzl-7giy"/></g>`,
		"fallback": "streamline-kameleon-color:hook-duo",
	});
}

export default Component;
