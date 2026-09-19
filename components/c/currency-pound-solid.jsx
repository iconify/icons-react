import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4ed2vbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4ed2vbkh"/>`,
		"fallback": "heroicons:currency-pound-solid",
	});
}

export default Component;
