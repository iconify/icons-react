import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j5unwvgdz.css';
import '../../css/n/nx5e8zbhq.css';
import '../../css/g/g33moobtw.css';
import '../../css/f/f59k7yeig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j5unwvgdz"/><path class="nx5e8zbhq"/><path class="g33moobtw"/><circle class="f59k7yeig"/></g>`,
		"fallback": "proicons:book-info",
	});
}

export default Component;
