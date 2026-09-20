import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg6y7tbvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg6y7tbvm"/>`,
		"fallback": "thesvg-color:bandsintown",
	});
}

export default Component;
