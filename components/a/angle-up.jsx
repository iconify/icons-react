import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mijq05b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mijq05b2q"/>`,
		"fallback": "uit:angle-up",
	});
}

export default Component;
