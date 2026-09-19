import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcz3a9bdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcz3a9bdo"/>`,
		"fallback": "bx:chevron-left",
	});
}

export default Component;
