import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbt9z6wse.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbt9z6wse"/>`,
		"fallback": "cib:flattr",
	});
}

export default Component;
