import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-qoz2f0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-qoz2f0c"/>`,
		"fallback": "icons8:brush",
	});
}

export default Component;
