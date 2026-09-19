import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxpt1mbov.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxpt1mbov"/>`,
		"fallback": "garden:circle-line-stroke-12",
	});
}

export default Component;
