import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yraf-tb9h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yraf-tb9h"/>`,
		"fallback": "f7:ellipsis-vertical-circle",
	});
}

export default Component;
