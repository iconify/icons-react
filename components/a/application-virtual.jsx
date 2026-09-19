import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k00a4g7yc.css';
import '../../css/o/otjvghwvk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k00a4g7yc"/><path class="otjvghwvk"/>`,
		"fallback": "carbon:application-virtual",
	});
}

export default Component;
