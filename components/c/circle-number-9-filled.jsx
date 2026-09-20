import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd81ub8rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd81ub8rn"/>`,
		"fallback": "tabler:circle-number-9-filled",
	});
}

export default Component;
