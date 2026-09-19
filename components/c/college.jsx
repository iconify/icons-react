import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcn5yl7de.css';

const viewBox = {"width":780,"height":621};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcn5yl7de"/>`,
		"fallback": "ls:college",
	});
}

export default Component;
