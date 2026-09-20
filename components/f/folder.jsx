import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iltdvb4kl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iltdvb4kl"/>`,
		"fallback": "simple-line-icons:folder",
	});
}

export default Component;
