import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q86ldobxb.css';
import '../../css/c/cd-6u1e9y.css';
import '../../css/u/u4synlg4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q86ldobxb"/><path class="cd-6u1e9y wm-s"/><path class="u4synlg4b"/></g>`,
		"fallback": "withicons:git-branch-plus-duo",
	});
}

export default Component;
