import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/got2f-y_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="got2f-y_h"/>`,
		"fallback": "at-icons:axe",
	});
}

export default Component;
