import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r89r5fl9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r89r5fl9d"/>`,
		"fallback": "flowbite:home-solid",
	});
}

export default Component;
