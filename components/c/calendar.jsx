import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkw6vqu9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkw6vqu9z"/>`,
		"fallback": "uit:calendar",
	});
}

export default Component;
