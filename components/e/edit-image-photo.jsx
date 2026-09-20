import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qg2dvzb2x.css';
import '../../css/x/xmgz8ebck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qg2dvzb2x"/><path class="xmgz8ebck"/></g>`,
		"fallback": "streamline:edit-image-photo",
	});
}

export default Component;
