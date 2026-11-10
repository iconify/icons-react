import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm4y67bjm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm4y67bjm"/>`,
		"fallback": "at-icons:flock",
	});
}

export default Component;
