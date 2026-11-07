import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2dvf4bly.css';
import '../../css/v/vu18-_bab.css';
import '../../css/q/q_81dnb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2dvf4bly"/><path class="vu18-_bab"/><path clip-rule="evenodd" class="q_81dnb5u"/>`,
		"fallback": "solar:ghost-outline",
	});
}

export default Component;
