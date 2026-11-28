import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fki9ziffh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fki9ziffh primary"/>`,
		"fallback": "iconaut:bluesky-duotone",
	});
}

export default Component;
