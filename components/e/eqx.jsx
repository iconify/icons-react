import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chzugt96m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chzugt96m"/>`,
		"fallback": "token:eqx",
	});
}

export default Component;
