import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r444k05qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r444k05qk"/>`,
		"fallback": "tdesign:calm-filled",
	});
}

export default Component;
