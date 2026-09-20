import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/taetpcc9j.css';
import '../../css/x/x1myhrb6i.css';
import '../../css/j/j7uzmn7zu.css';
import '../../css/u/u2t3prbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="taetpcc9j"/><path class="x1myhrb6i"/><path class="j7uzmn7zu"/><path class="u2t3prbzn"/></g>`,
		"fallback": "streamline-ultimate-color:athletics-javelin-throwing",
	});
}

export default Component;
