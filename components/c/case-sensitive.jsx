import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euhjnp2jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euhjnp2jj"/>`,
		"fallback": "noviair-light:case-sensitive",
	});
}

export default Component;
