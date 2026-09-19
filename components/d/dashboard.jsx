import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv1jh76rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv1jh76rm"/>`,
		"fallback": "grommet-icons:dashboard",
	});
}

export default Component;
