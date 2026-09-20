import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neoczv19k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neoczv19k"/>`,
		"fallback": "mdi:info-off",
	});
}

export default Component;
