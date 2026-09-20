import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peq-q4buf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="peq-q4buf"/>`,
		"fallback": "streamline-block:drink-food-cookie",
	});
}

export default Component;
