import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u4synlg4b.css';
import '../../css/c/cd-6u1e9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="u4synlg4b"/><path class="cd-6u1e9y wm-s"/></g>`,
		"fallback": "withicons:git-branch-plus",
	});
}

export default Component;
