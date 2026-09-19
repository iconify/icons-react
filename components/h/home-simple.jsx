import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1ze0-bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1ze0-bso"/>`,
		"fallback": "iconoir:home-simple",
	});
}

export default Component;
