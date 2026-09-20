import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tinvlkbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tinvlkbdh"/>`,
		"fallback": "tabler:assembly-filled",
	});
}

export default Component;
