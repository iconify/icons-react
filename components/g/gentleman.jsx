import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kt-5s54ec.css';
import '../../css/f/f0ws3dbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="kt-5s54ec"/><path class="f0ws3dbhm"/></g>`,
		"fallback": "streamline-cyber:gentleman",
	});
}

export default Component;
