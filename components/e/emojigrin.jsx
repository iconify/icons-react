import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfo7s3bis.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfo7s3bis"/>`,
		"fallback": "whh:emojigrin",
	});
}

export default Component;
