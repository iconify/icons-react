import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij_azbbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ij_azbbiv"/>`,
		"fallback": "flowbite:egg-solid",
	});
}

export default Component;
