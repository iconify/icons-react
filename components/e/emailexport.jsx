import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urtl6lb1u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urtl6lb1u"/>`,
		"fallback": "whh:emailexport",
	});
}

export default Component;
