import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8ob8cb-p.css';
import '../../css/u/uf2t2obsq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v8ob8cb-p"/><path class="uf2t2obsq"/></g>`,
		"fallback": "streamline-flex:download-box-1",
	});
}

export default Component;
