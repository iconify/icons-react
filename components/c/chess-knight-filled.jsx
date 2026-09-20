import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sop8lzbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sop8lzbad"/>`,
		"fallback": "tabler:chess-knight-filled",
	});
}

export default Component;
