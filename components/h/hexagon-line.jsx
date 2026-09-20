import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-s9mwn3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-s9mwn3v"/>`,
		"fallback": "ri:hexagon-line",
	});
}

export default Component;
