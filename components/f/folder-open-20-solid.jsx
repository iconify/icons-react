import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im8iwmb9e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im8iwmb9e"/>`,
		"fallback": "heroicons:folder-open-20-solid",
	});
}

export default Component;
