import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsskbnj7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qsskbnj7a"/>`,
		"fallback": "iconamoon:arrow-bottom-left-1-fill",
	});
}

export default Component;
