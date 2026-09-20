import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc9u30brk.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc9u30brk"/>`,
		"fallback": "memory:comment-text",
	});
}

export default Component;
