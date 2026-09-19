import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi331ob7j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi331ob7j"/>`,
		"fallback": "fa7-solid:home-lg-alt",
	});
}

export default Component;
