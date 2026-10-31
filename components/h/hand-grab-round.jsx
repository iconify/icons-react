import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a742oib1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a742oib1c"/>`,
		"fallback": "coolicons:hand-grab-round",
	});
}

export default Component;
