import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyo2-_1op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tyo2-_1op"/>`,
		"fallback": "streamline-sharp:brightness-1-remix",
	});
}

export default Component;
