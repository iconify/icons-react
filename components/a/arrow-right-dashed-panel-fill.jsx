import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ichfh497l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ichfh497l"/>`,
		"fallback": "keyline-icons:arrow-right-dashed-panel-fill",
	});
}

export default Component;
