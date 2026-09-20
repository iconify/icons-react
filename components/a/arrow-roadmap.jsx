import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icdz3ibjt.css';
import '../../css/j/jb1668bop.css';
import '../../css/r/r9jkfykpa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="icdz3ibjt"/><path class="jb1668bop"/><path class="r9jkfykpa"/></g>`,
		"fallback": "streamline-color:arrow-roadmap",
	});
}

export default Component;
