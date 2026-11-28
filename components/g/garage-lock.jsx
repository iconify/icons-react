import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk46foz9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk46foz9e"/>`,
		"fallback": "noviair-light:garage-lock",
	});
}

export default Component;
