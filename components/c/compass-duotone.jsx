import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvsj4rbkk.css';
import '../../css/l/l5qz7fbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yvsj4rbkk"/><path class="l5qz7fbtr"/>`,
		"fallback": "lets-icons:compass-duotone",
	});
}

export default Component;
