import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoatxut6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xoatxut6x"/>`,
		"fallback": "keyline-icons:circle-arrow-up-right-sharp-fill",
	});
}

export default Component;
