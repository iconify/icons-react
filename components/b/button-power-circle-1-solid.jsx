import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcw13cbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gcw13cbba"/>`,
		"fallback": "streamline-sharp:button-power-circle-1-solid",
	});
}

export default Component;
