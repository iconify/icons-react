import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8xmr5jbq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8xmr5jbq"/>`,
		"fallback": "bytesize:filter",
	});
}

export default Component;
