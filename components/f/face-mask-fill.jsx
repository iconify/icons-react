import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqy9p5uoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqy9p5uoe"/>`,
		"fallback": "mingcute:face-mask-fill",
	});
}

export default Component;
