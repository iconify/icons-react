import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvlda4jhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvlda4jhq"/>`,
		"fallback": "ri:expand-left-right-fill",
	});
}

export default Component;
