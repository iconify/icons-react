import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oro-z9kun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oro-z9kun"/>`,
		"fallback": "selfhst:docmost-light",
	});
}

export default Component;
