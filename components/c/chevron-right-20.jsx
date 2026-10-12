import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwuut5b3e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwuut5b3e"/>`,
		"fallback": "garden:chevron-right-20",
	});
}

export default Component;
