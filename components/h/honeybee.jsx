import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a65cbwu0b.css';
import '../../css/g/g6p3yibnm.css';
import '../../css/j/j183c7bol.css';
import '../../css/c/cmorc_thm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zjf7qpbzo.css';
import '../../css/t/tb9rnbbci.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a65cbwu0b"/><path class="g6p3yibnm"/><path class="j183c7bol"/><path class="cmorc_thm"/><g class="jn8qy4bru"><path class="zjf7qpbzo"/><path class="tb9rnbbci"/></g>`,
		"fallback": "openmoji:honeybee",
	});
}

export default Component;
