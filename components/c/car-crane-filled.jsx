import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq02nrk7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq02nrk7q"/>`,
		"fallback": "tabler:car-crane-filled",
	});
}

export default Component;
