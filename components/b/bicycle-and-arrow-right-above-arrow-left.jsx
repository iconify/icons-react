import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud1hjccqe.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud1hjccqe"/>`,
		"fallback": "pinhead:bicycle-and-arrow-right-above-arrow-left",
	});
}

export default Component;
