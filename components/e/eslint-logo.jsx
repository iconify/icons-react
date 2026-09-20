import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yzp1v-7ov.css';
import '../../css/x/x3ts0cbdk.css';
import '../../css/o/owguy0bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yzp1v-7ov"/><path class="x3ts0cbdk"/><path class="owguy0bid"/></g>`,
		"fallback": "streamline-logos:eslint-logo",
	});
}

export default Component;
