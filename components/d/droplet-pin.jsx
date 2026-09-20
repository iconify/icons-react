import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdg6c3btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdg6c3btx"/>`,
		"fallback": "tabler:droplet-pin",
	});
}

export default Component;
