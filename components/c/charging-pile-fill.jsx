import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga33f30at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ga33f30at"/>`,
		"fallback": "mingcute:charging-pile-fill",
	});
}

export default Component;
