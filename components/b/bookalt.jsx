import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c09546l0b.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c09546l0b"/>`,
		"fallback": "whh:bookalt",
	});
}

export default Component;
