import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw-430x6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw-430x6n"/>`,
		"fallback": "tabler:flame-off",
	});
}

export default Component;
