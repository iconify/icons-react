import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok6n68p5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok6n68p5n"/>`,
		"fallback": "typcn:chart-bar-outline",
	});
}

export default Component;
