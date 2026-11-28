import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq8x4zxcz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zn0h9p04f.css';
import '../../css/z/zbwamwa-z.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq8x4zxcz secondary"/><g class="dt0cm9dhy primary"><path class="zn0h9p04f"/><path class="zbwamwa-z"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:camera-off-duo",
	});
}

export default Component;
