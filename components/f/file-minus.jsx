import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/t/tzxipk_6c.css';
import '../../css/d/dyexuk5no.css';
import '../../css/t/tej44k3ii.css';
import '../../css/o/o7kyknbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="tzxipk_6c"/><path class="dyexuk5no"/><path class="tej44k3ii"/><path class="o7kyknbdc"/></g>`,
		"fallback": "withicons-retro:file-minus",
	});
}

export default Component;
