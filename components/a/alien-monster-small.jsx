import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s16trob1a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s16trob1a"/>`,
		"fallback": "dinkie-icons:alien-monster-small",
	});
}

export default Component;
