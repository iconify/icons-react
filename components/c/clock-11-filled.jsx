import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te5-__5uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te5-__5uf"/>`,
		"fallback": "boxicons:clock-11-filled",
	});
}

export default Component;
