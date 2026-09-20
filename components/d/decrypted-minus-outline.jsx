import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg0y5xmtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg0y5xmtz"/>`,
		"fallback": "mdi:decrypted-minus-outline",
	});
}

export default Component;
