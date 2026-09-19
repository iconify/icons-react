import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yllu2lzhg.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yllu2lzhg"/>`,
		"fallback": "zmdi:format-queue-music",
	});
}

export default Component;
