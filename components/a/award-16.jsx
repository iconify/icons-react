import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4npesb2t.css';
import '../../css/c/c6fjxyvsa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4npesb2t"/><path clip-rule="evenodd" class="c6fjxyvsa"/>`,
		"fallback": "qlementine-icons:award-16",
	});
}

export default Component;
