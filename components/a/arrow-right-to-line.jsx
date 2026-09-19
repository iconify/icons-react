import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd98jnfaw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd98jnfaw"/>`,
		"fallback": "at-icons:arrow-right-to-line",
	});
}

export default Component;
