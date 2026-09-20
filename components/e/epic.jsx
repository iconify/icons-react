import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6smpr0kq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6smpr0kq"/>`,
		"fallback": "pajamas:epic",
	});
}

export default Component;
