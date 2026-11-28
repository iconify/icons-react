import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbni4v0-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbni4v0-b"/>`,
		"fallback": "noviair:cloud-refresh",
	});
}

export default Component;
