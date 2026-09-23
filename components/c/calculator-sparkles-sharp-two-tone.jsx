import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dj04zfbhi.css';
import '../../css/j/j8doxx_bn.css';
import '../../css/i/i645x0uvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dj04zfbhi"/><path class="j8doxx_bn"/><path class="i645x0uvs"/></g>`,
		"fallback": "keyline-icons:calculator-sparkles-sharp-two-tone",
	});
}

export default Component;
