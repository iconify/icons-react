import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr0d0kx5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yr0d0kx5t"/>`,
		"fallback": "streamline-sharp:cake-solid",
	});
}

export default Component;
