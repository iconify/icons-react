import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5kud9bir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5kud9bir"/>`,
		"fallback": "selfhst:argo-cd-dark",
	});
}

export default Component;
