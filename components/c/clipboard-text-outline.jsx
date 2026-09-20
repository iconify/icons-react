import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goc7o0rte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="goc7o0rte"/>`,
		"fallback": "solar:clipboard-text-outline",
	});
}

export default Component;
