import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/b/bn5kjs2gv.css';
import '../../css/z/zn1c7xb9d.css';
import '../../css/l/l-5ly26tl.css';
import '../../css/q/qz-b4ng_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="bn5kjs2gv"/><path class="zn1c7xb9d"/><path class="l-5ly26tl"/><path class="qz-b4ng_h"/></g>`,
		"fallback": "withicons-retro:file-plus",
	});
}

export default Component;
