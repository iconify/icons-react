import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca88xpb9m.css';

const viewBox = {"width":1024,"height":961};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca88xpb9m"/>`,
		"fallback": "whh:emptystar",
	});
}

export default Component;
