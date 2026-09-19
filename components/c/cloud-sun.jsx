import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6qou888f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6qou888f"/>`,
		"fallback": "fa7-solid:cloud-sun",
	});
}

export default Component;
