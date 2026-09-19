import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhwo19b5q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uhwo19b5q"/>`,
		"fallback": "gravity-ui:circles-4-square",
	});
}

export default Component;
