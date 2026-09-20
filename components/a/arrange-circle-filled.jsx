import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdwd_9gor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdwd_9gor"/>`,
		"fallback": "reicon:arrange-circle-filled",
	});
}

export default Component;
