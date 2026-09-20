import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec8qg8bth.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec8qg8bth"/>`,
		"fallback": "pinhead:cat-sitting-and-exclamation-point",
	});
}

export default Component;
