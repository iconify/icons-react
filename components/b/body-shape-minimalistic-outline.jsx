import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2s8njbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2s8njbkx"/>`,
		"fallback": "solar:body-shape-minimalistic-outline",
	});
}

export default Component;
