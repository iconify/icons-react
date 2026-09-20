import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5xvncr9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5xvncr9i"/>`,
		"fallback": "selfhst:bludit-light",
	});
}

export default Component;
