import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csye4qb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="csye4qb2b"/>`,
		"fallback": "nrk:hardware-watch",
	});
}

export default Component;
