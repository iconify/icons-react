import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi0bfrkdy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi0bfrkdy"/>`,
		"fallback": "ep:folder-remove",
	});
}

export default Component;
