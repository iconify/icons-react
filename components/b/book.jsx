import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdhn56ehw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdhn56ehw"/>`,
		"fallback": "dashicons:book",
	});
}

export default Component;
