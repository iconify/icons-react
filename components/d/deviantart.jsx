import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuak7-9yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuak7-9yo"/>`,
		"fallback": "thesvg-color:deviantart",
	});
}

export default Component;
