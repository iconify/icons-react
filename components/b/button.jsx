import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-sd3vb2c.css';

const viewBox = {"width":44,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y-sd3vb2c"/>`,
		"fallback": "formkit:button",
	});
}

export default Component;
