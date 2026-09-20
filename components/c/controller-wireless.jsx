import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q6_lr9osz.css';
import '../../css/r/r_9bombyj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q6_lr9osz"/><path class="r_9bombyj"/></g>`,
		"fallback": "streamline:controller-wireless",
	});
}

export default Component;
