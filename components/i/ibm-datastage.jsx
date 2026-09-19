import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3kq37bng.css';
import '../../css/x/xqe6h1fjz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3kq37bng"/><path class="xqe6h1fjz"/>`,
		"fallback": "carbon:ibm-datastage",
	});
}

export default Component;
