import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i11dx0b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i11dx0b2j"/>`,
		"fallback": "ri:atom-line",
	});
}

export default Component;
