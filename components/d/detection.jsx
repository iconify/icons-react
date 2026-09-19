import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/a/aimf4ebuf.css';
import '../../css/c/c6vox3all.css';
import '../../css/t/tfpzyrb-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path clip-rule="evenodd" class="aimf4ebuf"/><path class="c6vox3all"/><path class="tfpzyrb-p"/></g>`,
		"fallback": "icon-park:detection",
	});
}

export default Component;
