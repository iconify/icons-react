import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kofy-7b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kofy-7b_i"/>`,
		"fallback": "iconaut:cloud-moon-lightning-solid",
	});
}

export default Component;
