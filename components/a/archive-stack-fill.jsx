import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itj2tfnbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itj2tfnbl"/>`,
		"fallback": "ri:archive-stack-fill",
	});
}

export default Component;
