import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o01m96mrx.css';
import '../../css/q/qm27x-b1o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o01m96mrx"/><path class="qm27x-b1o"/></g>`,
		"fallback": "glyphs:books",
	});
}

export default Component;
