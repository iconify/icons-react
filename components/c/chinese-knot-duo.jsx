import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yu2ay2bcw.css';
import '../../css/f/fv6d5gchd.css';
import '../../css/j/jam8cccqq.css';
import '../../css/w/w0-632-cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yu2ay2bcw"/><path class="fv6d5gchd wm-a"/><path class="jam8cccqq wm-a"/><path class="w0-632-cs"/></g>`,
		"fallback": "withicons:chinese-knot-duo",
	});
}

export default Component;
