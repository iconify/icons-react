import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t79s19b-q.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t79s19b-q"/>`,
		"fallback": "whh:1",
	});
}

export default Component;
