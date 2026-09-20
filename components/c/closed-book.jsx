import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-7edqb5i.css';
import '../../css/f/fm7fqi_re.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/dvtlueb-w.css';
import '../../css/w/wwq-3qbpu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-7edqb5i"/><path class="fm7fqi_re"/><g class="jn8qy4bru"><path class="dvtlueb-w"/><path class="wwq-3qbpu"/></g>`,
		"fallback": "openmoji:closed-book",
	});
}

export default Component;
