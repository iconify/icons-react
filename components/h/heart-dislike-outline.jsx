import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otgpm3b5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otgpm3b5s"/>`,
		"fallback": "ion:heart-dislike-outline",
	});
}

export default Component;
