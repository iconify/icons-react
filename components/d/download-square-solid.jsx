import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lipib6elo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lipib6elo"/>`,
		"fallback": "iconoir:download-square-solid",
	});
}

export default Component;
