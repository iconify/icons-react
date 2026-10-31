import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cl5xc3tem.css';
import '../../css/e/e-res604y.css';
import '../../css/e/eembscket.css';
import '../../css/b/b_g1ylbow.css';
import '../../css/n/nw7-e304a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cl5xc3tem wm-shadow"/><path class="e-res604y"/><path class="eembscket"/><path class="b_g1ylbow"/><path class="nw7-e304a"/></g>`,
		"fallback": "withicons-retro:book-marked",
	});
}

export default Component;
