import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zyx3w2ekd.css';
import '../../css/t/tzjobtbgu.css';
import '../../css/a/ar-9lob7c.css';
import '../../css/m/mcf-4tb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zyx3w2ekd"/><path class="tzjobtbgu"/><path class="ar-9lob7c"/><path class="mcf-4tb9y"/></g>`,
		"fallback": "streamline-cyber:cursor-arrow-target",
	});
}

export default Component;
