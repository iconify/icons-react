import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dog50kb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dog50kb7s"/>`,
		"fallback": "thesvg:frontify",
	});
}

export default Component;
