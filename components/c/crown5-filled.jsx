import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjt0m6brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjt0m6brs"/>`,
		"fallback": "reicon:crown5-filled",
	});
}

export default Component;
