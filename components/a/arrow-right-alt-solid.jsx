import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slxx8490d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="slxx8490d"/>`,
		"fallback": "flowbite:arrow-right-alt-solid",
	});
}

export default Component;
