import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wif79jbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wif79jbxv"/>`,
		"fallback": "streamline-ultimate:design-file-text-image-bold",
	});
}

export default Component;
