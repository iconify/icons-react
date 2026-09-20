import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb5n4phcw.css';
import '../../css/d/dggo-4bwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb5n4phcw"/><path class="dggo-4bwf"/>`,
		"fallback": "selfhst:goodreads",
	});
}

export default Component;
