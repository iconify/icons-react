import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlxms-bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlxms-bbo"/>`,
		"fallback": "iconaut:cloud-lightning-rain-solid",
	});
}

export default Component;
