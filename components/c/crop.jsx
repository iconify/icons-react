import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwbson8du.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwbson8du"/>`,
		"fallback": "icomoon-free:crop",
	});
}

export default Component;
