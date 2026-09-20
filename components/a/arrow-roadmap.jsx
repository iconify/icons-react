import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gixgreb8f.css';
import '../../css/s/s-6grri2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gixgreb8f"/><path class="s-6grri2b"/></g>`,
		"fallback": "streamline:arrow-roadmap",
	});
}

export default Component;
