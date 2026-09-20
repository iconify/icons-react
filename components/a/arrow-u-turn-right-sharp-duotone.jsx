import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywuvlsy5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywuvlsy5n"/>`,
		"fallback": "keyline-icons:arrow-u-turn-right-sharp-duotone",
	});
}

export default Component;
