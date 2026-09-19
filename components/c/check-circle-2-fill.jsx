import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-0xj5x9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-0xj5x9f"/>`,
		"fallback": "iconamoon:check-circle-2-fill",
	});
}

export default Component;
