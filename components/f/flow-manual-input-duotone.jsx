import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh7d4-wmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zh7d4-wmn"/>`,
		"fallback": "iconaut:flow-manual-input-duotone",
	});
}

export default Component;
