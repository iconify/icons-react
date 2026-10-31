import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wjpcdrbil.css';
import '../../css/d/do_gaobru.css';
import '../../css/h/h3pi6ibxi.css';
import '../../css/c/clwivwvku.css';
import '../../css/y/ydkl_3iyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wjpcdrbil"/><path class="do_gaobru"/><path class="h3pi6ibxi wm-shine"/><path class="clwivwvku wm-k"/><path class="wm-a ydkl_3iyz"/></g>`,
		"fallback": "withicons-kawaii:certificate",
	});
}

export default Component;
