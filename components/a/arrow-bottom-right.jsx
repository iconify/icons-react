import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hradpqb8i.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hradpqb8i"/>`,
		"fallback": "system-uicons:arrow-bottom-right",
	});
}

export default Component;
