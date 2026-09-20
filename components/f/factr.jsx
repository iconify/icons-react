import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/govcx3bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="govcx3bhc"/>`,
		"fallback": "token:factr",
	});
}

export default Component;
