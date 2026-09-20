import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8mf9bbkj.css';
import '../../css/o/o9hzagbky.css';
import '../../css/c/c_n8ujbwe.css';
import '../../css/u/udzdqjn5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="a8mf9bbkj"/><path class="o9hzagbky"/><path class="c_n8ujbwe"/><path class="udzdqjn5g"/></g>`,
		"fallback": "lets-icons:group-add",
	});
}

export default Component;
