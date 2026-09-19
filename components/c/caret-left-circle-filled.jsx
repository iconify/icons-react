import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnxh3obsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnxh3obsl"/>`,
		"fallback": "boxicons:caret-left-circle-filled",
	});
}

export default Component;
