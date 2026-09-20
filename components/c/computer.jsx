import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4rij-b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4rij-b0t"/>`,
		"fallback": "mi:computer",
	});
}

export default Component;
