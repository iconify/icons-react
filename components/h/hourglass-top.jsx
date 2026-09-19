import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h20g5bcub.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h20g5bcub"/>`,
		"fallback": "bi:hourglass-top",
	});
}

export default Component;
