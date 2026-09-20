import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aio2xbbzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aio2xbbzh"/>`,
		"fallback": "selfhst:frappe-builder-light",
	});
}

export default Component;
