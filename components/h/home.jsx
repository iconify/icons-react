import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li3cydawl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li3cydawl"/>`,
		"fallback": "noviair-light:home",
	});
}

export default Component;
