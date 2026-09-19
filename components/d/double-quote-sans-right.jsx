import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b09-5jb3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b09-5jb3l"/>`,
		"fallback": "cil:double-quote-sans-right",
	});
}

export default Component;
