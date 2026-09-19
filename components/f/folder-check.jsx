import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs30sebpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zs30sebpo"/>`,
		"fallback": "griddy-icons:folder-check",
	});
}

export default Component;
