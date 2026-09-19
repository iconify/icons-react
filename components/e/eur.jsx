import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6qp5mb5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6qp5mb5h"/>`,
		"fallback": "cryptocurrency:eur",
	});
}

export default Component;
