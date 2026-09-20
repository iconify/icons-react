import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct5_d9bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ct5_d9bgk"/>`,
		"fallback": "prime:clipboard",
	});
}

export default Component;
