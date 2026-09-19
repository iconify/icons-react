import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf324w_xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gf324w_xh"/>`,
		"fallback": "griddy-icons:code-merge-filled",
	});
}

export default Component;
