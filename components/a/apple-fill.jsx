import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8-iphu6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8-iphu6c"/>`,
		"fallback": "ri:apple-fill",
	});
}

export default Component;
