import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt8bckbgy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt8bckbgy"/>`,
		"fallback": "roentgen:bicycle-x-4",
	});
}

export default Component;
