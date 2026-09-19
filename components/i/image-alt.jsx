import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffa_0jn3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffa_0jn3o"/>`,
		"fallback": "griddy-icons:image-alt",
	});
}

export default Component;
