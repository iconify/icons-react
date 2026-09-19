import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jioms3hrj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jioms3hrj"/>`,
		"fallback": "ep:folder-add",
	});
}

export default Component;
