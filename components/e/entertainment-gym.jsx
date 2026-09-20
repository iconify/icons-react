import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw5rifb6m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw5rifb6m"/>`,
		"fallback": "streamline-block:entertainment-gym",
	});
}

export default Component;
