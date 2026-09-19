import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evfpsd44e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evfpsd44e"/>`,
		"fallback": "icons8:crop",
	});
}

export default Component;
