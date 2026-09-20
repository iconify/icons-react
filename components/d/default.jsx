import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4p__bc9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4p__bc9g"/>`,
		"fallback": "roentgen:default",
	});
}

export default Component;
