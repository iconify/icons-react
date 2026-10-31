import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a6xtgbbpy.css';
import '../../css/h/h6pp3dbux.css';
import '../../css/x/xgi6hfb6n.css';
import '../../css/j/js9045b9u.css';
import '../../css/j/j1f-dlb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a6xtgbbpy wm-shadow"/><path class="h6pp3dbux"/><path class="xgi6hfb6n"/><path class="js9045b9u"/><path class="j1f-dlb1n"/></g>`,
		"fallback": "withicons-retro:git-pull-request-draft",
	});
}

export default Component;
