import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwnj5k5sb.css';
import '../../css/b/b7mwlnblu.css';

const viewBox = {"width":65,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwnj5k5sb"/><path class="b7mwlnblu"/>`,
		"fallback": "lineicons:ethereum",
	});
}

export default Component;
