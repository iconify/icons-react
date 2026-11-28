import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka7tb0btn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ytld-tbrf.css';
import '../../css/h/h_o0hmbmj.css';
import '../../css/a/ainwzh__y.css';
import '../../css/b/bf_hgxbmg.css';
import '../../css/o/o99te2bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka7tb0btn secondary"/><g class="dt0cm9dhy primary"><path class="ytld-tbrf"/><path class="h_o0hmbmj"/><path class="ainwzh__y"/><path class="bf_hgxbmg"/><path class="o99te2bvx"/></g>`,
		"fallback": "iconaut:captions-duo",
	});
}

export default Component;
