import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1ge8bg6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1ge8bg6i"/>`,
		"fallback": "bi:arrow-up-circle-fill",
	});
}

export default Component;
