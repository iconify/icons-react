import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjvrhdl8q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sjvrhdl8q"/>`,
		"fallback": "heroicons-solid:bars-arrow-up",
	});
}

export default Component;
