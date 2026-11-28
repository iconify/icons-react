import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5_5dzb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5_5dzb2w"/>`,
		"fallback": "noviair:award-star",
	});
}

export default Component;
