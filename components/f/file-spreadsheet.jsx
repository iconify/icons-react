import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/g/g-08xsbra.css';
import '../../css/d/d0ywyggxs.css';
import '../../css/u/uc67mufvz.css';
import '../../css/f/fmzltabxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="g-08xsbra"/><path class="d0ywyggxs"/><path class="uc67mufvz"/><path class="fmzltabxk"/></g>`,
		"fallback": "withicons-retro:file-spreadsheet",
	});
}

export default Component;
