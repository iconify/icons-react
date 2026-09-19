import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwel8ob0x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwel8ob0x"/>`,
		"fallback": "fluent-mdl2:fast-mode",
	});
}

export default Component;
