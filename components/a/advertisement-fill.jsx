import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thhsj0r-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thhsj0r-g"/>`,
		"fallback": "ri:advertisement-fill",
	});
}

export default Component;
