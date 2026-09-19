import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7mvr2b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7mvr2b4p"/>`,
		"fallback": "boxicons:arrow-from-top-stroke",
	});
}

export default Component;
