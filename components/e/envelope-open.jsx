import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aym2qd6ln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aym2qd6ln"/>`,
		"fallback": "heroicons-outline:envelope-open",
	});
}

export default Component;
