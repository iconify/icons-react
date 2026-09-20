import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yspu1txce.css';
import '../../css/e/em8icc8zx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary yspu1txce"/><path class="em8icc8zx"/>`,
		"fallback": "oui:app-packetbeat",
	});
}

export default Component;
