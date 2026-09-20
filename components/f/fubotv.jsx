import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvrd7oq7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvrd7oq7x"/>`,
		"fallback": "selfhst:fubotv",
	});
}

export default Component;
