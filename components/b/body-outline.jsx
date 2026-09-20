import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxn9okbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxn9okbgl"/>`,
		"fallback": "solar:body-outline",
	});
}

export default Component;
