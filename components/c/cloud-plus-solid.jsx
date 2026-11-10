import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv_--b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dkv_--b0z"/>`,
		"fallback": "sidekickicons:cloud-plus-solid",
	});
}

export default Component;
