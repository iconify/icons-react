import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-lfmccxy.css';
import '../../css/p/pn4efebvn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-lfmccxy"/><path class="pn4efebvn"/>`,
		"fallback": "octicon:book-locked-16",
	});
}

export default Component;
