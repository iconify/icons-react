import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us2as5bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us2as5bdo"/>`,
		"fallback": "mingcute:hand-heart-fill",
	});
}

export default Component;
