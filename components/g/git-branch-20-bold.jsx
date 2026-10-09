import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do4ne9uns.css';
import '../../css/j/j89f_0dyx.css';
import '../../css/b/b6j267ddl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do4ne9uns"/><path class="j89f_0dyx"/><path class="b6j267ddl"/>`,
		"fallback": "energy-icons:git-branch-20-bold",
	});
}

export default Component;
