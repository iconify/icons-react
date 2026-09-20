import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1ljx3b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1ljx3b6b"/>`,
		"fallback": "mdi:face-sick",
	});
}

export default Component;
