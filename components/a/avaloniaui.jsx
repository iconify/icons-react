import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcwzmb8zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcwzmb8zn"/>`,
		"fallback": "thesvg-color:avaloniaui",
	});
}

export default Component;
