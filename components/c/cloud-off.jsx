import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xbxx92b5g.css';
import '../../css/z/zr53q7bld.css';
import '../../css/i/ios52sb_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xbxx92b5g"/><path class="zr53q7bld"/><path class="ios52sb_k"/></g>`,
		"fallback": "streamline-plump-color:cloud-off",
	});
}

export default Component;
