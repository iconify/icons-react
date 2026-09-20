import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq2lx5x1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq2lx5x1i"/>`,
		"fallback": "mdi:database-cog-outline",
	});
}

export default Component;
