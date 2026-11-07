import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk_r9ibjr.css';
import '../../css/v/vj58-bbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jk_r9ibjr"/><path class="vj58-bbwy"/>`,
		"fallback": "solar:cloud-upload-outline",
	});
}

export default Component;
