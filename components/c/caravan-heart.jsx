import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v90dkjpud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v90dkjpud"/>`,
		"fallback": "noviair:caravan-heart",
	});
}

export default Component;
