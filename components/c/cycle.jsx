import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3nr2d6ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3nr2d6ce"/>`,
		"fallback": "grommet-icons:cycle",
	});
}

export default Component;
