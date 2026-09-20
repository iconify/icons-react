import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wel3ij-ab.css';
import '../../css/u/ur0kqubed.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="wel3ij-ab"/><path class="ur0kqubed"/><path class="sp3ujwwyq"/></g>`,
		"fallback": "keyline-icons:bot-off-sharp-fill",
	});
}

export default Component;
