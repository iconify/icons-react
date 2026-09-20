import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1qgs8v4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1qgs8v4p"/>`,
		"fallback": "tabler:arrow-bar-to-up",
	});
}

export default Component;
