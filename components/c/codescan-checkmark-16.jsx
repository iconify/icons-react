import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc0si1p-z.css';
import '../../css/c/ci07z7bbf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc0si1p-z"/><path class="ci07z7bbf"/>`,
		"fallback": "octicon:codescan-checkmark-16",
	});
}

export default Component;
