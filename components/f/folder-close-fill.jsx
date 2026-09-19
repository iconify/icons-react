import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iavwc_xnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iavwc_xnc"/>`,
		"fallback": "iconamoon:folder-close-fill",
	});
}

export default Component;
