import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq-e0mx3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq-e0mx3n"/>`,
		"fallback": "pixel:brightness-low-solid",
	});
}

export default Component;
