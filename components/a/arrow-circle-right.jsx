import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tug4wjebt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tug4wjebt"/>`,
		"fallback": "codicon:arrow-circle-right",
	});
}

export default Component;
