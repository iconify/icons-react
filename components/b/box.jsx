import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/um8oggvox.css';
import '../../css/v/vfsj_cb5a.css';
import '../../css/c/c2nnz_bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="um8oggvox"/><path class="vfsj_cb5a"/><path class="c2nnz_bgd"/></g>`,
		"fallback": "lets-icons:box",
	});
}

export default Component;
