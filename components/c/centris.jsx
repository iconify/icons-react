import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw7xd7oft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw7xd7oft"/>`,
		"fallback": "cbi:centris",
	});
}

export default Component;
