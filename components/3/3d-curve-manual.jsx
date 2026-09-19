import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_eh_ihjp.css';
import '../../css/u/u7ypgqgoe.css';
import '../../css/a/a19wo66mh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_eh_ihjp"/><path class="u7ypgqgoe"/><path class="a19wo66mh"/>`,
		"fallback": "carbon:3d-curve-manual",
	});
}

export default Component;
