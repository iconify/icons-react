import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlg3zzljz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vlg3zzljz"/>`,
		"fallback": "iconoir:arrow-down-right-square-solid",
	});
}

export default Component;
