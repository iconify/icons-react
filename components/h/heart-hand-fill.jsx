import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rixoy32sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rixoy32sx"/>`,
		"fallback": "mingcute:heart-hand-fill",
	});
}

export default Component;
