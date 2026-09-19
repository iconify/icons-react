import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4igpo13j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4igpo13j"/>`,
		"fallback": "akar-icons:align-to-bottom",
	});
}

export default Component;
