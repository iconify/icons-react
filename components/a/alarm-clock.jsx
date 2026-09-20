import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ibqk43y3z.css';
import '../../css/d/dxrv6e9dn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ibqk43y3z"/><path class="dxrv6e9dn"/></g>`,
		"fallback": "streamline:alarm-clock",
	});
}

export default Component;
