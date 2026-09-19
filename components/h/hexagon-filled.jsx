import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4v05cb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4v05cb7y"/>`,
		"fallback": "griddy-icons:hexagon-filled",
	});
}

export default Component;
