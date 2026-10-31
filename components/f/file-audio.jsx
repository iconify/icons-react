import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/i/i15re6blx.css';
import '../../css/e/esu2dkbrj.css';
import '../../css/z/zbtggxbnl.css';
import '../../css/g/gk-b6ob3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="i15re6blx"/><path class="esu2dkbrj"/><path class="zbtggxbnl"/><path class="gk-b6ob3p"/></g>`,
		"fallback": "withicons-retro:file-audio",
	});
}

export default Component;
