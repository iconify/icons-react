import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du1gg3oja.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du1gg3oja"/>`,
		"fallback": "garden:check-box-fill-16",
	});
}

export default Component;
