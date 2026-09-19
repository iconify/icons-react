import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we5l3ab3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we5l3ab3f"/>`,
		"fallback": "grommet-icons:descend",
	});
}

export default Component;
