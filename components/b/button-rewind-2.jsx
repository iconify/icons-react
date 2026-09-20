import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eqxfht_yt.css';
import '../../css/l/l611pybqv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="eqxfht_yt"/><path class="l611pybqv"/></g>`,
		"fallback": "streamline:button-rewind-2",
	});
}

export default Component;
