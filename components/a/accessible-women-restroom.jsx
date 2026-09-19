import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsyqg_0ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsyqg_0ex"/>`,
		"fallback": "guidance:accessible-women-restroom",
	});
}

export default Component;
