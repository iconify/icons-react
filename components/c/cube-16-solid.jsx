import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivj7y7blf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivj7y7blf"/>`,
		"fallback": "heroicons:cube-16-solid",
	});
}

export default Component;
