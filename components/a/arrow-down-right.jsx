import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz6vqmbyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz6vqmbyu"/>`,
		"fallback": "charm:arrow-down-right",
	});
}

export default Component;
