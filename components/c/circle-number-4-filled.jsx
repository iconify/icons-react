import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb1gmnbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb1gmnbzr"/>`,
		"fallback": "tabler:circle-number-4-filled",
	});
}

export default Component;
