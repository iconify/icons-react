import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wekqacc_i.css';
import '../../css/s/s-8cdb7kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wekqacc_i"/><path class="s-8cdb7kg"/></g>`,
		"fallback": "mage:exclamation-hexagon",
	});
}

export default Component;
