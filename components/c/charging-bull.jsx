import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhbj0wbch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhbj0wbch"/>`,
		"fallback": "game-icons:charging-bull",
	});
}

export default Component;
