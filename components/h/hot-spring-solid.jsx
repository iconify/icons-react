import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly34j431r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ly34j431r"/>`,
		"fallback": "streamline-sharp:hot-spring-solid",
	});
}

export default Component;
