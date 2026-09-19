import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orlp_9n3u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orlp_9n3u"/>`,
		"fallback": "ep:data-line",
	});
}

export default Component;
