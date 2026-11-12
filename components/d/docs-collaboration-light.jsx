import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzk01q4nh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzk01q4nh"/>`,
		"fallback": "selfhst:docs-collaboration-light",
	});
}

export default Component;
