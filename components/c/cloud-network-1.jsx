import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8c084gqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d8c084gqo"/>`,
		"fallback": "streamline-freehand:cloud-network-1",
	});
}

export default Component;
