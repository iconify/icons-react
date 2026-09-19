import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az_a87o8v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az_a87o8v"/>`,
		"fallback": "dinkie-icons:file-vector",
	});
}

export default Component;
