import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm3vq9bmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sm3vq9bmf"/>`,
		"fallback": "griddy-icons:code",
	});
}

export default Component;
