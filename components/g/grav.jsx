import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3bqw9bsf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3bqw9bsf"/>`,
		"fallback": "fa7-brands:grav",
	});
}

export default Component;
