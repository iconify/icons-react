import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-n1e2gul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-n1e2gul"/>`,
		"fallback": "selfhst:atera-dark",
	});
}

export default Component;
