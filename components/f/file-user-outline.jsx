import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0ogznero.css';
import '../../css/c/cgf21cybt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0ogznero"/><path clip-rule="evenodd" class="cgf21cybt"/>`,
		"fallback": "basil:file-user-outline",
	});
}

export default Component;
