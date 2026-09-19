import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn73hlbnp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn73hlbnp"/>`,
		"fallback": "fa7-solid:e",
	});
}

export default Component;
