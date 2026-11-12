import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-2lssbba.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-2lssbba"/>`,
		"fallback": "selfhst:docuseal-dark",
	});
}

export default Component;
