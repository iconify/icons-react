import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isc-7v3rs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isc-7v3rs"/>`,
		"fallback": "roentgen:guidepost",
	});
}

export default Component;
