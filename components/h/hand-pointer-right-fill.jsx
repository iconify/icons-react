import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf7-bcbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uf7-bcbmb"/>`,
		"fallback": "keyline-icons:hand-pointer-right-fill",
	});
}

export default Component;
