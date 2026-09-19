import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu1h3grca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu1h3grca"/>`,
		"fallback": "heroicons:beaker",
	});
}

export default Component;
