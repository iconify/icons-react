import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbiw0ob-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qbiw0ob-q"/>`,
		"fallback": "griddy-icons:bookmark-add",
	});
}

export default Component;
