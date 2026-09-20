import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctoz3fbuh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctoz3fbuh"/>`,
		"fallback": "selfhst:hanko-dark",
	});
}

export default Component;
