import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7c84o2ps.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7c84o2ps"/>`,
		"fallback": "whh:emojisorry",
	});
}

export default Component;
