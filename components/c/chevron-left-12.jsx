import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdxi4ubed.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdxi4ubed"/>`,
		"fallback": "qlementine-icons:chevron-left-12",
	});
}

export default Component;
