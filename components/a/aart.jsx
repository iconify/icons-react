import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq8x9dh3q.css';
import '../../css/m/mvqgwxqkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq8x9dh3q"/><path class="mvqgwxqkt"/>`,
		"fallback": "token:aart",
	});
}

export default Component;
