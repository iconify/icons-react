import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hno7pvg-a.css';
import '../../css/g/g9xrnlb8l.css';
import '../../css/o/oqg9eif2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hno7pvg-a"/><path class="g9xrnlb8l"/><path class="oqg9eif2b"/></g>`,
		"fallback": "streamline-flex-color:hierarchy-1",
	});
}

export default Component;
