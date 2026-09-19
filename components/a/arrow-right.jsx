import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_49-e-9o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_49-e-9o"/>`,
		"fallback": "f7:arrow-right",
	});
}

export default Component;
