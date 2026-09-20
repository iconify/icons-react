import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty8jntqqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty8jntqqh"/>`,
		"fallback": "thesvg-color:dash",
	});
}

export default Component;
