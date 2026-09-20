import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-elg5b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-elg5b-r"/>`,
		"fallback": "mdi:flag-variant-minus",
	});
}

export default Component;
