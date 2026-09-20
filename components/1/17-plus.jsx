import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-3ddbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny-3ddbxg"/>`,
		"fallback": "uil:17-plus",
	});
}

export default Component;
