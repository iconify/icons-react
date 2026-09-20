import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vftj4abqz.css';
import '../../css/u/u4byyd1td.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vftj4abqz"/><path class="u4byyd1td"/></g>`,
		"fallback": "streamline:button-rewind-1",
	});
}

export default Component;
