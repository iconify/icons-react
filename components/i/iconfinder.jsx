import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6d77psmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6d77psmq"/>`,
		"fallback": "simple-icons:iconfinder",
	});
}

export default Component;
