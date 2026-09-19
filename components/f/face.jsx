import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6q-f6bnh.css';
import '../../css/q/q798ngb3k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6q-f6bnh"/><path class="q798ngb3k"/>`,
		"fallback": "cil:face",
	});
}

export default Component;
