import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y63gh9bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y63gh9bzg"/>`,
		"fallback": "mingcute:file-forbid-fill",
	});
}

export default Component;
