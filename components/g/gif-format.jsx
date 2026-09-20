import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lxwworgdk.css';
import '../../css/v/vvd02ccsx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lxwworgdk"/><path class="vvd02ccsx"/></g>`,
		"fallback": "streamline:gif-format",
	});
}

export default Component;
