import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f51nmvb9n.css';
import '../../css/t/t2aiwobxz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f51nmvb9n"/><path class="t2aiwobxz"/>`,
		"fallback": "carbon:folder-shared",
	});
}

export default Component;
