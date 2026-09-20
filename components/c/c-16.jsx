import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avrw6g-oj.css';
import '../../css/u/udo50kb5b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avrw6g-oj"/><path class="udo50kb5b"/>`,
		"fallback": "nonicons:c-16",
	});
}

export default Component;
