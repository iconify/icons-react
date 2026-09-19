import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfe0ihi1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfe0ihi1o"/>`,
		"fallback": "carbon:connect-source",
	});
}

export default Component;
