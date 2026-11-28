import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7gtn7bcd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kat2uhbgv.css';
import '../../css/f/falxvzb7e.css';
import '../../css/k/k6pxfgb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x7gtn7bcd"/><g class="dt0cm9dhy primary"><path class="kat2uhbgv"/><path class="falxvzb7e"/><path class="k6pxfgb5x"/></g>`,
		"fallback": "iconaut:acorn-duo",
	});
}

export default Component;
