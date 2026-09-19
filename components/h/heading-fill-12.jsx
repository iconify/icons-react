import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9mcn14ky.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9mcn14ky"/>`,
		"fallback": "garden:heading-fill-12",
	});
}

export default Component;
