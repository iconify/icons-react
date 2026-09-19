import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4v7-0b5p.css';
import '../../css/m/md286fbip.css';
import '../../css/c/c7b6r3wqm.css';
import '../../css/x/x3xglccbq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="o4v7-0b5p"/><g class="md286fbip"><path class="c7b6r3wqm"/><path class="x3xglccbq"/></g></g>`,
		"fallback": "cryptocurrency-color:btdx",
	});
}

export default Component;
