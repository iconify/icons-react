import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce_od5b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ce_od5b1h"/>`,
		"fallback": "flowbite:column-solid",
	});
}

export default Component;
