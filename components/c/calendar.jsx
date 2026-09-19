import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9nbzj2qc.css';
import '../../css/n/nzs58m68f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9nbzj2qc"/><path class="nzs58m68f"/>`,
		"fallback": "foundation:calendar",
	});
}

export default Component;
