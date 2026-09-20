import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/crsqxebvn.css';
import '../../css/m/mmi39bbnw.css';
import '../../css/a/a8qpkhsmr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="crsqxebvn"/><path class="mmi39bbnw"/><path class="a8qpkhsmr"/></g>`,
		"fallback": "streamline-flex:drone",
	});
}

export default Component;
