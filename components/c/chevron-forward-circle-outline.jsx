import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybwzvccuq.css';
import '../../css/o/ozud7nbis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybwzvccuq"/><path class="ozud7nbis"/>`,
		"fallback": "famicons:chevron-forward-circle-outline",
	});
}

export default Component;
