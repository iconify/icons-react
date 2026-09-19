import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mlqdwrbrc.css';
import '../../css/w/wm5cqvxsm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mlqdwrbrc"/><path class="wm5cqvxsm"/></g>`,
		"fallback": "glyphs:copy-1",
	});
}

export default Component;
