import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufww38b4l.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufww38b4l"/>`,
		"fallback": "iwwa:arrow-down",
	});
}

export default Component;
