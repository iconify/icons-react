import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pxxmtubeu.css';
import '../../css/a/a222zm84k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pxxmtubeu"/><path class="a222zm84k"/></g>`,
		"fallback": "streamline:car-battery-charging",
	});
}

export default Component;
