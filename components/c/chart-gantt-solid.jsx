import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fwyqsbcwl.css';
import '../../css/l/le8xtqbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fwyqsbcwl"/><path class="le8xtqbka wm-a"/></g>`,
		"fallback": "withicons:chart-gantt-solid",
	});
}

export default Component;
