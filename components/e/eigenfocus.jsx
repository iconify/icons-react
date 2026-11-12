import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grpqfdcxp.css';
import '../../css/i/if6wlcb2s.css';
import '../../css/o/o5sq00_9y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grpqfdcxp"/><path class="if6wlcb2s"/><path class="o5sq00_9y"/>`,
		"fallback": "selfhst:eigenfocus",
	});
}

export default Component;
