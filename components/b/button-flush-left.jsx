import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zalphcmjo.css';
import '../../css/f/fqa96gb_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zalphcmjo"/><path class="fqa96gb_q"/>`,
		"fallback": "carbon:button-flush-left",
	});
}

export default Component;
