import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs75febyk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs75febyk"/>`,
		"fallback": "fa6-solid:camera-retro",
	});
}

export default Component;
