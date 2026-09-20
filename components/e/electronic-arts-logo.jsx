import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g_bf8mboc.css';
import '../../css/z/z38l0obvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g_bf8mboc"/><path class="z38l0obvt"/></g>`,
		"fallback": "streamline-logos:electronic-arts-logo",
	});
}

export default Component;
