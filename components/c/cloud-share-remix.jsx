import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb42m0bvm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lb42m0bvm"/>`,
		"fallback": "streamline:cloud-share-remix",
	});
}

export default Component;
