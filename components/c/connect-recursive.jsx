import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh6g29_8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh6g29_8r"/>`,
		"fallback": "carbon:connect-recursive",
	});
}

export default Component;
