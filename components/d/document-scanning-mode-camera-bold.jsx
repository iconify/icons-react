import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfpj7sbvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yfpj7sbvs"/>`,
		"fallback": "streamline-ultimate:document-scanning-mode-camera-bold",
	});
}

export default Component;
