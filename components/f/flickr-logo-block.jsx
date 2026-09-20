import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsl6rs1ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fsl6rs1ix"/>`,
		"fallback": "streamline-logos:flickr-logo-block",
	});
}

export default Component;
