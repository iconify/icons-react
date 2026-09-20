import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r60vhccip.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r60vhccip"/>`,
		"fallback": "lineicons:dumbbell",
	});
}

export default Component;
