import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlpp7qqxm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlpp7qqxm"/>`,
		"fallback": "carbon:chevron-right",
	});
}

export default Component;
