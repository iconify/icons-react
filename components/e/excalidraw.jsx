import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg0altbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg0altbfz"/>`,
		"fallback": "thesvg-color:excalidraw",
	});
}

export default Component;
