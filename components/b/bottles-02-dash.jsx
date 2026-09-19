import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htbh933pt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htbh933pt"/>`,
		"fallback": "carbon:bottles-02-dash",
	});
}

export default Component;
