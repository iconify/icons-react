import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/l/l2ahvt68o.css';
import '../../css/p/p-o4ftb1y.css';
import '../../css/b/be_99jb-k.css';
import '../../css/m/m_c-5rbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="l2ahvt68o"/><path class="p-o4ftb1y"/><path class="be_99jb-k"/><path class="m_c-5rbyc"/></g>`,
		"fallback": "withicons-retro:file-x",
	});
}

export default Component;
