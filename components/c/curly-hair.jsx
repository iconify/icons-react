import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2o1loy.css';
import '../../css/w/wupqombwn.css';
import '../../css/a/azj7lxepr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pjuh73b9f.css';
import '../../css/c/c1sfv0fej.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9a2o1loy"><path class="wupqombwn"/><path class="azj7lxepr"/></g><g class="jn8qy4bru"><path class="pjuh73b9f"/><path class="c1sfv0fej"/></g>`,
		"fallback": "openmoji:curly-hair",
	});
}

export default Component;
