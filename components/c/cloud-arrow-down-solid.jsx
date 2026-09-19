import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj-j1uuvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nj-j1uuvi"/>`,
		"fallback": "heroicons:cloud-arrow-down-solid",
	});
}

export default Component;
