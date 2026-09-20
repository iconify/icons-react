import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbmlh9n1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mbmlh9n1l"/>`,
		"fallback": "nrk:glasses-solid-expressive",
	});
}

export default Component;
