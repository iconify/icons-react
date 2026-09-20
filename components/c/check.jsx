import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhkkcbc2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhkkcbc2e"/>`,
		"fallback": "reicon:check",
	});
}

export default Component;
