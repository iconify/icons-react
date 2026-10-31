import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y5bh3jb9c.css';
import '../../css/p/p83undbxt.css';
import '../../css/m/m-32ofbyd.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="y5bh3jb9c"/><path class="p83undbxt wm-shine"/><path class="m-32ofbyd"/><path class="wm-deco yuobg4bux"/></g>`,
		"fallback": "withicons-kawaii:arrow-big-up",
	});
}

export default Component;
