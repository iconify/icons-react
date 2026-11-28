import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkz86tbnb.css';
import '../../css/t/tlq2l5bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkz86tbnb secondary"/><path class="primary tlq2l5bdt"/>`,
		"fallback": "iconaut:bluesky-duo",
	});
}

export default Component;
