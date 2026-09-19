import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqaztlb0g.css';
import '../../css/j/jumzrzb6l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gqaztlb0g"/><path class="jumzrzb6l"/></g>`,
		"fallback": "cryptocurrency-color:entrp",
	});
}

export default Component;
