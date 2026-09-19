import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5wm4bcad.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5wm4bcad"/>`,
		"fallback": "codicon:chrome-minimize",
	});
}

export default Component;
