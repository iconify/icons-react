import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d27bhtbqq.css';
import '../../css/v/v0283z18f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d27bhtbqq"/><path class="v0283z18f"/>`,
		"fallback": "famicons:enter-outline",
	});
}

export default Component;
