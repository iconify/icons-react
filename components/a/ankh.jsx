import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d81xixb5q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d81xixb5q"/>`,
		"fallback": "fa7-solid:ankh",
	});
}

export default Component;
