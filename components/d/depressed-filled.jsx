import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwg1e6bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwg1e6bof"/>`,
		"fallback": "tdesign:depressed-filled",
	});
}

export default Component;
