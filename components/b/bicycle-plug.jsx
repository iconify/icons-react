import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2m1qdbbh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2m1qdbbh"/>`,
		"fallback": "roentgen:bicycle-plug",
	});
}

export default Component;
