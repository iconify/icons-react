import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuiynvcqs.css';

const viewBox = {"width":516,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuiynvcqs"/>`,
		"fallback": "ls:guillemotleft",
	});
}

export default Component;
