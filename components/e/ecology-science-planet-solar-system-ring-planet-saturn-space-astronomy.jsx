import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c0qmicb2n.css';
import '../../css/w/ww4g0abbd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c0qmicb2n"/><path class="ww4g0abbd"/></g>`,
		"fallback": "streamline:ecology-science-planet-solar-system-ring-planet-saturn-space-astronomy",
	});
}

export default Component;
