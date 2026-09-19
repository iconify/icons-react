import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5asd1mya.css';
import '../../css/w/w893w9fet.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5asd1mya"/><path class="w893w9fet"/>`,
		"fallback": "ant-design:cloud-download-outline",
	});
}

export default Component;
