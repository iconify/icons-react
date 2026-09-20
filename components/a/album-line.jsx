import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iso5s1bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iso5s1bsk"/>`,
		"fallback": "ri:album-line",
	});
}

export default Component;
