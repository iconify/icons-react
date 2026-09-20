import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aibd18w3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aibd18w3p"/>`,
		"fallback": "reicon:course-down",
	});
}

export default Component;
