import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhiq11z0i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhiq11z0i"/>`,
		"fallback": "selfhst:anchr-light",
	});
}

export default Component;
