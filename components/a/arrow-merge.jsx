import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyf3bcc0w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyf3bcc0w"/>`,
		"fallback": "f7:arrow-merge",
	});
}

export default Component;
