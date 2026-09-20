import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjxqo3bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjxqo3bqn"/>`,
		"fallback": "mynaui:circle-notch",
	});
}

export default Component;
