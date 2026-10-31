import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a-03h6e9e.css';
import '../../css/t/t5btu5p8f.css';
import '../../css/u/u4synlg4b.css';
import '../../css/c/cd-6u1e9y.css';
import '../../css/o/oatdcubsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a-03h6e9e"/><path class="t5btu5p8f wm-shine"/><path class="u4synlg4b wm-k"/><path class="cd-6u1e9y wm-s"/><path class="oatdcubsh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:git-branch-plus",
	});
}

export default Component;
