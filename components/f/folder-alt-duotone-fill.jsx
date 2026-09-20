import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxlpcxeof.css';
import '../../css/d/dg1ec6byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jxlpcxeof"/><path clip-rule="evenodd" class="dg1ec6byn"/>`,
		"fallback": "lets-icons:folder-alt-duotone-fill",
	});
}

export default Component;
