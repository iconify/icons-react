import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sx8xlo8yd.css';
import '../../css/d/drngy167u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sx8xlo8yd"/><path class="drngy167u"/></g>`,
		"fallback": "streamline:front-camera",
	});
}

export default Component;
