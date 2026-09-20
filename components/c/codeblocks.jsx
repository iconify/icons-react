import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7eieudmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7eieudmy"/>`,
		"fallback": "simple-icons:codeblocks",
	});
}

export default Component;
