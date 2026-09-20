import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/v1hpnswly.css';
import '../../css/i/i95zs7vtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="v1hpnswly"/><path class="i95zs7vtu"/></g>`,
		"fallback": "streamline-cyber:hat-tall",
	});
}

export default Component;
