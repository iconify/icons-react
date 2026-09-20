import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nae_7cc8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nae_7cc8s"/>`,
		"fallback": "keyline-icons:cloud-plus-fill",
	});
}

export default Component;
