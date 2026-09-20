import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n3-nybcir.css';
import '../../css/g/gza8-pwps.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n3-nybcir"/><path class="gza8-pwps"/></g>`,
		"fallback": "streamline:heart-rate-search",
	});
}

export default Component;
