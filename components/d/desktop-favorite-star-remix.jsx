import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhpxol20x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yhpxol20x"/>`,
		"fallback": "streamline:desktop-favorite-star-remix",
	});
}

export default Component;
