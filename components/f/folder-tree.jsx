import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/il01cibpj.css';
import '../../css/f/f1n50-b2k.css';
import '../../css/d/d2_zz0cog.css';
import '../../css/y/y91glfb1o.css';
import '../../css/e/eug8o8b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="il01cibpj wm-shadow"/><path class="f1n50-b2k"/><path class="d2_zz0cog"/><path class="y91glfb1o"/><path class="eug8o8b_r"/></g>`,
		"fallback": "withicons-retro:folder-tree",
	});
}

export default Component;
