import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiu4lcw5h.css';
import '../../css/e/e0la5wsre.css';
import '../../css/r/rz3ur5bsf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tiu4lcw5h"/><path class="e0la5wsre"/><ellipse class="rz3ur5bsf"/>`,
		"fallback": "nimbus:exclamation-triangle",
	});
}

export default Component;
