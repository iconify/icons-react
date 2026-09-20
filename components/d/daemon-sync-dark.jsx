import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odvo0kyvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odvo0kyvf"/>`,
		"fallback": "selfhst:daemon-sync-dark",
	});
}

export default Component;
