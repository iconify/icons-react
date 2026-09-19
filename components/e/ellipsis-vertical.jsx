import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccbo3n_4w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccbo3n_4w"/>`,
		"fallback": "heroicons-solid:ellipsis-vertical",
	});
}

export default Component;
