import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bapk_1f8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bapk_1f8k"/>`,
		"fallback": "gg:arrow-right",
	});
}

export default Component;
