import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjmw7zpnx.css';
import '../../css/o/oz3hiebwf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjmw7zpnx"/><path class="oz3hiebwf"/>`,
		"fallback": "octicon:copilot-16",
	});
}

export default Component;
