import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzcl15b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qzcl15b6k"/>`,
		"fallback": "lineicons:brave",
	});
}

export default Component;
