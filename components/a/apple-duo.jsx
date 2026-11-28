import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khtovtb-c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ltvz_r8sf.css';
import '../../css/p/p1kdwps6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khtovtb-c secondary"/><g class="dt0cm9dhy primary"><path class="ltvz_r8sf"/><path class="p1kdwps6m"/></g>`,
		"fallback": "iconaut:apple-duo",
	});
}

export default Component;
