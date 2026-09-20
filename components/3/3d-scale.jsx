import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cidenrbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cidenrbns"/>`,
		"fallback": "streamline-sharp:3d-scale",
	});
}

export default Component;
