import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6099ob0e.css';
import '../../css/h/hjmckqb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6099ob0e"/><path class="hjmckqb0y"/>`,
		"fallback": "thesvg-color:aimass",
	});
}

export default Component;
