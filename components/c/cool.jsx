import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trjilpbgd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trjilpbgd"/>`,
		"fallback": "icomoon-free:cool",
	});
}

export default Component;
