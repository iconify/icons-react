import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqz4vgzgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqz4vgzgm"/>`,
		"fallback": "solar:arrow-to-down-left-linear",
	});
}

export default Component;
