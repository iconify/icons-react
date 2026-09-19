import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/y/yzt_xxjga.css';
import '../../css/x/x5wrwz-ra.css';
import '../../css/m/mh1elgghd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="yzt_xxjga"/><path class="x5wrwz-ra"/><path class="mh1elgghd"/></g>`,
		"fallback": "icon-park:alignment-left-bottom",
	});
}

export default Component;
