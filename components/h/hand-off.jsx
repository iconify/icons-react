import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua9_ryb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua9_ryb7m"/>`,
		"fallback": "tabler:hand-off",
	});
}

export default Component;
