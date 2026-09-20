import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9c5bwb5t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9c5bwb5t"/>`,
		"fallback": "qlementine-icons:drumsticks-16",
	});
}

export default Component;
