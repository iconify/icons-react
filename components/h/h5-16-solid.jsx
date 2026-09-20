import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in4ij8bvj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in4ij8bvj"/>`,
		"fallback": "sidekickicons:h5-16-solid",
	});
}

export default Component;
