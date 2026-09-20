import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcw8iw7rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcw8iw7rr"/>`,
		"fallback": "tabler:battery-3-filled",
	});
}

export default Component;
