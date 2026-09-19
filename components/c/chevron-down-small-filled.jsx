import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0rgs5y-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0rgs5y-a"/>`,
		"fallback": "griddy-icons:chevron-down-small-filled",
	});
}

export default Component;
