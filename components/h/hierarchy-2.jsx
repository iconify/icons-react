import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fq4v5jw9g.css';
import '../../css/k/k5dy00b8m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fq4v5jw9g"/><path class="k5dy00b8m"/></g>`,
		"fallback": "streamline-flex-color:hierarchy-2",
	});
}

export default Component;
