import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e9xpminxa.css';
import '../../css/p/pc0k38cwq.css';
import '../../css/v/vu-gv-tmt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e9xpminxa"/><path class="pc0k38cwq"/><path class="vu-gv-tmt"/></g>`,
		"fallback": "streamline:brain",
	});
}

export default Component;
