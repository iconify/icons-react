import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz1b3xbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz1b3xbnt"/>`,
		"fallback": "mingcute:align-left-2-fill",
	});
}

export default Component;
