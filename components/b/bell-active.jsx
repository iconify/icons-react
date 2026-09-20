import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybiv9vb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ybiv9vb4i"/>`,
		"fallback": "nrk:bell-active",
	});
}

export default Component;
