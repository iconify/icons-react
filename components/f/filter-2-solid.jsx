import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0k-kub9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s0k-kub9c"/>`,
		"fallback": "streamline-sharp:filter-2-solid",
	});
}

export default Component;
