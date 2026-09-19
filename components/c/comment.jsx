import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpgos0b_i.css';

const viewBox = {"width":717,"height":676};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpgos0b_i"/>`,
		"fallback": "ls:comment",
	});
}

export default Component;
