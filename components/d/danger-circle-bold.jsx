import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de5-ioblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="de5-ioblz"/>`,
		"fallback": "solar:danger-circle-bold",
	});
}

export default Component;
