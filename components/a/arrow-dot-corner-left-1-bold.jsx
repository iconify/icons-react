import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve4etabbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve4etabbw"/>`,
		"fallback": "streamline-ultimate:arrow-dot-corner-left-1-bold",
	});
}

export default Component;
