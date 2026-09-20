import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pobd2gbxj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pobd2gbxj"/>`,
		"fallback": "octicon:hourglass-16",
	});
}

export default Component;
