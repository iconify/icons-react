import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu9mk0bps.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu9mk0bps"/>`,
		"fallback": "clarity:factory-solid",
	});
}

export default Component;
