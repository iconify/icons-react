import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoglpd1rl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoglpd1rl"/>`,
		"fallback": "fluent-mdl2:build",
	});
}

export default Component;
