import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mkrulybhz.css';
import '../../css/w/wdh8k5bwb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mkrulybhz"/><path class="wdh8k5bwb"/></g>`,
		"fallback": "glyphs:clock-1",
	});
}

export default Component;
