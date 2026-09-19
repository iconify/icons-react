import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag2su0b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag2su0b1d"/>`,
		"fallback": "ci:caret-up-md",
	});
}

export default Component;
