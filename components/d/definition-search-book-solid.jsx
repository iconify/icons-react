import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1ur7b9n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_1ur7b9n"/>`,
		"fallback": "streamline-flex:definition-search-book-solid",
	});
}

export default Component;
