import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go8zfqfdr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go8zfqfdr"/>`,
		"fallback": "fa7-solid:a",
	});
}

export default Component;
