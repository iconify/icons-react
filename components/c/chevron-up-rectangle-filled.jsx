import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1pltw_5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1pltw_5x"/>`,
		"fallback": "tdesign:chevron-up-rectangle-filled",
	});
}

export default Component;
