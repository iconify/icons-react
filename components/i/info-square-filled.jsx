import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgq6q4bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgq6q4bve"/>`,
		"fallback": "tabler:info-square-filled",
	});
}

export default Component;
