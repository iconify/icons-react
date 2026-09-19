import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x5e7nu4fc.css';
import '../../css/c/cagnyqb0m.css';
import '../../css/s/s8jgbbb7u.css';
import '../../css/a/a3-l9sbot.css';
import '../../css/y/ysa4bbb6q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="x5e7nu4fc"/><path class="cagnyqb0m"/><path class="s8jgbbb7u"/><path class="a3-l9sbot"/><path class="ysa4bbb6q"/></g>`,
		"fallback": "icon-park:align-text-middle",
	});
}

export default Component;
