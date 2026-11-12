import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu3v3lbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu3v3lbvu"/>`,
		"fallback": "tabler:droplet-key",
	});
}

export default Component;
