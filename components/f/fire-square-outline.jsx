import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guvw5obdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="guvw5obdh"/>`,
		"fallback": "solar:fire-square-outline",
	});
}

export default Component;
