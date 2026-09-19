import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubbzq5eml.css';

const viewBox = {"width":160,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubbzq5eml"/>`,
		"fallback": "zmdi:chevron-right",
	});
}

export default Component;
