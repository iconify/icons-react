import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/at0wocbmy.css';
import '../../css/r/rk2p0fx6y.css';
import '../../css/b/b6ri4w3zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="at0wocbmy"/><path class="rk2p0fx6y"/><path class="b6ri4w3zb"/></g>`,
		"fallback": "streamline-ultimate:diagram-split-horizontal",
	});
}

export default Component;
