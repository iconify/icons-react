import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcu0ohh7w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcu0ohh7w"/>`,
		"fallback": "zondicons:edit-cut",
	});
}

export default Component;
