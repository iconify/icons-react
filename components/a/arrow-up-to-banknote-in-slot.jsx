import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdhb7_b8t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdhb7_b8t"/>`,
		"fallback": "pinhead:arrow-up-to-banknote-in-slot",
	});
}

export default Component;
