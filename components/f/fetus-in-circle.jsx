import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5pt64b6z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5pt64b6z"/>`,
		"fallback": "pinhead:fetus-in-circle",
	});
}

export default Component;
