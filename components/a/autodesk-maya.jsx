import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2tolfrqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2tolfrqc"/>`,
		"fallback": "thesvg-color:autodesk-maya",
	});
}

export default Component;
