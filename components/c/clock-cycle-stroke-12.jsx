import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg-6srbit.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg-6srbit"/>`,
		"fallback": "garden:clock-cycle-stroke-12",
	});
}

export default Component;
