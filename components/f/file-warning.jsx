import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/f/fxkf5gb0u.css';
import '../../css/v/v4r378sth.css';
import '../../css/j/ju9zztb3c.css';
import '../../css/q/q66l-p6wj.css';
import '../../css/u/u-dzvoknb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="fxkf5gb0u"/><path class="v4r378sth"/><path class="ju9zztb3c"/><path class="q66l-p6wj"/><path class="u-dzvoknb"/></g>`,
		"fallback": "withicons-retro:file-warning",
	});
}

export default Component;
