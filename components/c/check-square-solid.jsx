import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0b3d79qc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0b3d79qc"/>`,
		"fallback": "mynaui:check-square-solid",
	});
}

export default Component;
