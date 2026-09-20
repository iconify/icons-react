import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt8xn8bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tt8xn8bac"/>`,
		"fallback": "streamline-sharp:insert-top-left-remix",
	});
}

export default Component;
