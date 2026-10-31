import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6w6z2h9y.css';
import '../../css/d/d-uxzpbkq.css';
import '../../css/j/j4uzf0vrh.css';
import '../../css/h/hxxqm6bcp.css';
import '../../css/v/vpc_nobch.css';
import '../../css/b/bpicxyjew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j6w6z2h9y wm-k"/><path class="d-uxzpbkq wm-deco"/><path class="j4uzf0vrh wm-k"/><path class="hxxqm6bcp wm-k"/><path class="vpc_nobch wm-shadow"/><path class="bpicxyjew wm-shine"/></g>`,
		"fallback": "withicons-valentine:file-video",
	});
}

export default Component;
