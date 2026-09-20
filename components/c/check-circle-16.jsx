import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7zh4ybar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7zh4ybar"/>`,
		"fallback": "octicon:check-circle-16",
	});
}

export default Component;
