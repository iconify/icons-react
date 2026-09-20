import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq4ed5z4k.css';
import '../../css/w/w_zssta9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gq4ed5z4k"/><path class="w_zssta9i"/></g>`,
		"fallback": "streamline:cheese",
	});
}

export default Component;
