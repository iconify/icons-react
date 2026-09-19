import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3gam5wwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3gam5wwh"/>`,
		"fallback": "hugeicons:html-file-01",
	});
}

export default Component;
