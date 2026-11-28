import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbk-j9k3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbk-j9k3e"/>`,
		"fallback": "noviair:armchair",
	});
}

export default Component;
