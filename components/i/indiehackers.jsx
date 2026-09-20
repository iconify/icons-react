import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3-66vhye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3-66vhye"/>`,
		"fallback": "simple-icons:indiehackers",
	});
}

export default Component;
