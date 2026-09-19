import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1_r15bns.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1_r15bns"/>`,
		"fallback": "fluent-mdl2:hard-drive",
	});
}

export default Component;
