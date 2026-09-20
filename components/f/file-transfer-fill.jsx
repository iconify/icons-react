import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwtzf7nop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwtzf7nop"/>`,
		"fallback": "ri:file-transfer-fill",
	});
}

export default Component;
