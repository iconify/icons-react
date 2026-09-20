import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4ih4z8ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4ih4z8ku"/>`,
		"fallback": "simple-icons:iced",
	});
}

export default Component;
