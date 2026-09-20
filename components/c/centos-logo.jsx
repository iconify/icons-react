import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e8630-79j.css';
import '../../css/k/k0x96db0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="e8630-79j"/><path class="k0x96db0p"/></g>`,
		"fallback": "streamline-logos:centos-logo",
	});
}

export default Component;
