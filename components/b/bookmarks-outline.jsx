import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob6fqnbja.css';
import '../../css/u/u0bpkj-iv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob6fqnbja"/><path class="u0bpkj-iv"/>`,
		"fallback": "ion:bookmarks-outline",
	});
}

export default Component;
