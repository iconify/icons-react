import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_-izf01l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_-izf01l"/>`,
		"fallback": "streamline-sharp:bullet-list-remix",
	});
}

export default Component;
