import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdjh8tojm.css';
import '../../css/b/bst9txban.css';
import '../../css/f/ffydtswup.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdjh8tojm"/><path class="bst9txban"/><path class="ffydtswup"/>`,
		"fallback": "selfhst:domainmod-dark",
	});
}

export default Component;
