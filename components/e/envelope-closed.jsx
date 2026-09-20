import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bidf0ubeq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bidf0ubeq"/>`,
		"fallback": "radix-icons:envelope-closed",
	});
}

export default Component;
