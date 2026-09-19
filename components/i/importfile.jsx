import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwmymebtn.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwmymebtn"/>`,
		"fallback": "whh:importfile",
	});
}

export default Component;
