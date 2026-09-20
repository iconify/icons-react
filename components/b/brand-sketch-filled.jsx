import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrr9c8bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrr9c8bew"/>`,
		"fallback": "tabler:brand-sketch-filled",
	});
}

export default Component;
