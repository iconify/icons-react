import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brx9nkbqz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brx9nkbqz"/>`,
		"fallback": "pinhead:giftwrapped-box",
	});
}

export default Component;
