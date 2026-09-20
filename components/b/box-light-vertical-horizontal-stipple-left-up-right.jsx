import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7f-x89fg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7f-x89fg"/>`,
		"fallback": "memory:box-light-vertical-horizontal-stipple-left-up-right",
	});
}

export default Component;
