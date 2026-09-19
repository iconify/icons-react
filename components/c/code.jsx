import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thw5170-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thw5170-g"/>`,
		"fallback": "gridicons:code",
	});
}

export default Component;
