import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybdunmb3j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybdunmb3j"/>`,
		"fallback": "roentgen:drawer",
	});
}

export default Component;
