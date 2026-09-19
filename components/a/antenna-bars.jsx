import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x838nnz9h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x838nnz9h"/>`,
		"fallback": "dinkie-icons:antenna-bars",
	});
}

export default Component;
