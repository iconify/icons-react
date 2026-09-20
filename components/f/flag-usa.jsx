import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq3i6bvzp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq3i6bvzp"/>`,
		"fallback": "roentgen:flag-usa",
	});
}

export default Component;
