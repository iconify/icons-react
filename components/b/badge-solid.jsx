import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibh0pxv3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ibh0pxv3v"/>`,
		"fallback": "sidekickicons:badge-solid",
	});
}

export default Component;
