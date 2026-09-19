import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odrt_7b6s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odrt_7b6s"/>`,
		"fallback": "carbon:funnel-sort",
	});
}

export default Component;
