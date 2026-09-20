import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zhg6tvjcc.css';
import '../../css/f/fljjg0bcd.css';
import '../../css/d/d42da4bym.css';
import '../../css/x/x4rhj3b1g.css';
import '../../css/q/qwrmidbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path clip-rule="evenodd" class="zhg6tvjcc"/><path class="fljjg0bcd"/><path class="d42da4bym"/><path class="x4rhj3b1g"/><path clip-rule="evenodd" class="qwrmidbrs"/></g>`,
		"fallback": "streamline-plump-color:bowl-chop-stick",
	});
}

export default Component;
