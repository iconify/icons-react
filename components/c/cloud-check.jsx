import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6c9fmbum.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6c9fmbum"/>`,
		"fallback": "icomoon-free:cloud-check",
	});
}

export default Component;
