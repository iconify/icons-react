import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/page7kkyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="page7kkyc"/>`,
		"fallback": "mingcute:fish-fill",
	});
}

export default Component;
