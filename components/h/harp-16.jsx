import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzjyarb7v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzjyarb7v"/>`,
		"fallback": "qlementine-icons:harp-16",
	});
}

export default Component;
