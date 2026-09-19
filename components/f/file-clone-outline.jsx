import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di935-bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di935-bls"/>`,
		"fallback": "flowbite:file-clone-outline",
	});
}

export default Component;
