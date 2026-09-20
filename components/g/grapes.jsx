import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl6-vpbjf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl6-vpbjf"/>`,
		"fallback": "roentgen:grapes",
	});
}

export default Component;
