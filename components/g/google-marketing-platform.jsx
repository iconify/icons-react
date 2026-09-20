import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-dzn9u3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-dzn9u3p"/>`,
		"fallback": "thesvg:google-marketing-platform",
	});
}

export default Component;
