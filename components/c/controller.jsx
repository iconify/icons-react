import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ygtchdcih.css';
import '../../css/o/ox0j0xb3r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ygtchdcih"/><path class="ox0j0xb3r"/></g>`,
		"fallback": "streamline:controller",
	});
}

export default Component;
