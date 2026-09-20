import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/suu2gb9fa.css';
import '../../css/k/k1c_53ugi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="suu2gb9fa"/><path class="k1c_53ugi"/></g>`,
		"fallback": "streamline:battery-alert-1",
	});
}

export default Component;
