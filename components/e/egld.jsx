import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnxu-q_7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnxu-q_7n"/>`,
		"fallback": "token:egld",
	});
}

export default Component;
