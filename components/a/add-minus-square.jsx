import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8cyw0bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8cyw0bsq"/>`,
		"fallback": "ci:add-minus-square",
	});
}

export default Component;
