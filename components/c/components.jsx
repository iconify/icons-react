import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkha-9b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkha-9b1d"/>`,
		"fallback": "tabler:components",
	});
}

export default Component;
