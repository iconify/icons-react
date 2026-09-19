import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na0vj1bvi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na0vj1bvi"/>`,
		"fallback": "f7:arrow-up-right-square",
	});
}

export default Component;
