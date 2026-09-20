import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4fn36r9i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4fn36r9i"/>`,
		"fallback": "qlementine-icons:concave-double-16",
	});
}

export default Component;
