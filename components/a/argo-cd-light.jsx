import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9wgbmbqn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9wgbmbqn"/>`,
		"fallback": "selfhst:argo-cd-light",
	});
}

export default Component;
