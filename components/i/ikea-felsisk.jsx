import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8bo_1b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8bo_1b9s"/>`,
		"fallback": "cbi:ikea-felsisk",
	});
}

export default Component;
