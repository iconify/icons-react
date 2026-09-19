import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/r/rd9mw5o4z.css';
import '../../css/e/exgnwabga.css';
import '../../css/h/hcvmaqbuv.css';
import '../../css/i/i46u6tbey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="rd9mw5o4z"/><path class="exgnwabga"/><circle class="hcvmaqbuv"/><path class="i46u6tbey"/></g>`,
		"fallback": "icon-park-outline:camera-three",
	});
}

export default Component;
