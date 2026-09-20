import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8fvoacxg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8fvoacxg"/>`,
		"fallback": "radix-icons:align-top",
	});
}

export default Component;
