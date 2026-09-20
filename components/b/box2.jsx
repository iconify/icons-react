import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gcwqm4-4k.css';
import '../../css/x/x7psi2bpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gcwqm4-4k"/><path class="x7psi2bpn"/></g>`,
		"fallback": "reicon:box2",
	});
}

export default Component;
