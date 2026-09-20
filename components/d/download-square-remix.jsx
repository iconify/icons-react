import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulgpg1p1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ulgpg1p1q"/>`,
		"fallback": "streamline-sharp:download-square-remix",
	});
}

export default Component;
