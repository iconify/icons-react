import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/axg624rap.css';
import '../../css/s/s0t2n-bvx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="axg624rap"/><path class="s0t2n-bvx"/></g>`,
		"fallback": "streamline:group-meeting-call",
	});
}

export default Component;
