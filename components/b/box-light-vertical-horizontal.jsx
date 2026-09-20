import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-fv5ok9h.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-fv5ok9h"/>`,
		"fallback": "memory:box-light-vertical-horizontal",
	});
}

export default Component;
