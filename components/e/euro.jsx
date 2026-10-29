import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9ohoulew.css';
import '../../css/r/ro2kipt4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9ohoulew wm-k"/><path class="ro2kipt4k wm-a"/>`,
		"fallback": "withicons-bauhaus:euro",
	});
}

export default Component;
