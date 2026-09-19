import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujlvo7bfi.css';

const viewBox = {"width":1472,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujlvo7bfi"/>`,
		"fallback": "fa:glide-g",
	});
}

export default Component;
