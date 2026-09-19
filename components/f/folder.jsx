import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs__5j4lh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs__5j4lh"/>`,
		"fallback": "f7:folder",
	});
}

export default Component;
