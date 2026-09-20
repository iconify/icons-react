import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5t0x2btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5t0x2btr"/>`,
		"fallback": "tabler:border-horizontal",
	});
}

export default Component;
