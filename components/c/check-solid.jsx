import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhy6a3bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhy6a3bsq"/>`,
		"fallback": "pixel:check-solid",
	});
}

export default Component;
