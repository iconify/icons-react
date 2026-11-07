import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0jc9qlwi.css';
import '../../css/j/j9-jftbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0jc9qlwi"/><path class="j9-jftbbk"/>`,
		"fallback": "solar:chat-round-replay-bold-duotone",
	});
}

export default Component;
