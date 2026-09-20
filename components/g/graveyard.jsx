import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vog3f1bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vog3f1bho"/>`,
		"fallback": "mdi:graveyard",
	});
}

export default Component;
