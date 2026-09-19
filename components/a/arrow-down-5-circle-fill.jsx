import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8p7wtb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8p7wtb5o"/>`,
		"fallback": "iconamoon:arrow-down-5-circle-fill",
	});
}

export default Component;
