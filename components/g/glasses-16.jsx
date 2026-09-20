import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuxnpbbtf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zuxnpbbtf"/>`,
		"fallback": "qlementine-icons:glasses-16",
	});
}

export default Component;
