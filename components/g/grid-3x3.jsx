import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/q/qnz8_nike.css';
import '../../css/d/d1akiylgq.css';
import '../../css/y/yg7y56b9u.css';
import '../../css/f/fh5b84bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mie31z6an"/><path class="qnz8_nike"/><path class="d1akiylgq"/><path class="yg7y56b9u"/><path class="fh5b84bbb"/></g>`,
		"fallback": "iconaut:grid-3x3",
	});
}

export default Component;
