import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-4c2875v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-4c2875v"/>`,
		"fallback": "simple-icons:allegro",
	});
}

export default Component;
