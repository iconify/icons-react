import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg0ikk5oo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v4efpxr1b.css';
import '../../css/h/hi9hqcb9u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg0ikk5oo"/><g class="jn8qy4bru"><path class="v4efpxr1b"/><path class="hi9hqcb9u"/></g>`,
		"fallback": "openmoji:four-leaf-clover",
	});
}

export default Component;
