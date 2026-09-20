import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvpn05bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvpn05bfc"/>`,
		"fallback": "keyline-icons:folder-plus",
	});
}

export default Component;
