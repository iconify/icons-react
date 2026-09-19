import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a68wrvb8b.css';
import '../../css/g/g5xqtsbzl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a68wrvb8b"/><path class="g5xqtsbzl"/>`,
		"fallback": "carbon:bookmark-add",
	});
}

export default Component;
