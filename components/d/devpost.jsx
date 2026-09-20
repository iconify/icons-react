import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou_ifdb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou_ifdb3t"/>`,
		"fallback": "thesvg-color:devpost",
	});
}

export default Component;
