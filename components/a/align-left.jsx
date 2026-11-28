import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyeo_epso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyeo_epso"/>`,
		"fallback": "noviair:align-left",
	});
}

export default Component;
