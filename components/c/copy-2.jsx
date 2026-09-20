import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l1wis9mfp.css';
import '../../css/d/dv5e62btd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l1wis9mfp"/><path class="dv5e62btd"/></g>`,
		"fallback": "streamline-flex:copy-2",
	});
}

export default Component;
