import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqf9kac9b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqf9kac9b"/>`,
		"fallback": "subway:file-13",
	});
}

export default Component;
