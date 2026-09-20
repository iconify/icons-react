import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtpce1bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtpce1bsm"/>`,
		"fallback": "streamline-ultimate:command-button-keyboard-bold",
	});
}

export default Component;
