import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb7zqp66w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jb7zqp66w"/>`,
		"fallback": "heroicons:chevron-left-20-solid",
	});
}

export default Component;
