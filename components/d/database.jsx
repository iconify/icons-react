import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/laq682b3r.css';
import '../../css/j/jj1j1acvi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="laq682b3r"/><path class="jj1j1acvi"/></g>`,
		"fallback": "streamline-flex:database",
	});
}

export default Component;
