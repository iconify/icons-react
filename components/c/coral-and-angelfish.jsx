import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-t8_bbko.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-t8_bbko"/>`,
		"fallback": "pinhead:coral-and-angelfish",
	});
}

export default Component;
