import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1_d6_bej.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1_d6_bej"/>`,
		"fallback": "roentgen:hazelnut",
	});
}

export default Component;
