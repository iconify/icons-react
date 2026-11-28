import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/guwyv2bao.css';
import '../../css/h/h6koctbny.css';
import '../../css/g/g7zv9z6hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="guwyv2bao"/><path class="h6koctbny"/><path class="g7zv9z6hb"/></g>`,
		"fallback": "iconaut:boxing-glove",
	});
}

export default Component;
