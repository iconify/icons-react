import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffok7h96d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffok7h96d"/>`,
		"fallback": "mdi:box-cog",
	});
}

export default Component;
