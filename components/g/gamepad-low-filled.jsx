import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ltzfghh8s.css';
import '../../css/s/slly40bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ltzfghh8s"/><path class="slly40bbd"/></g>`,
		"fallback": "reicon:gamepad-low-filled",
	});
}

export default Component;
