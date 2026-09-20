import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy-a_2b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy-a_2b1l"/>`,
		"fallback": "tabler:circle-number-6-filled",
	});
}

export default Component;
