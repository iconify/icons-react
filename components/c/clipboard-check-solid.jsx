import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bulm8yy-y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bulm8yy-y"/>`,
		"fallback": "la:clipboard-check-solid",
	});
}

export default Component;
