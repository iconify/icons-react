import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amfc7iafx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="amfc7iafx"/>`,
		"fallback": "majesticons:battery-low",
	});
}

export default Component;
