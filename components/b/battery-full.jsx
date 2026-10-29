import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e-hlhoo-s.css';
import '../../css/q/qrsr6i-gm.css';
import '../../css/v/v63ah-ban.css';
import '../../css/z/zq067jsaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e-hlhoo-s"/><path class="qrsr6i-gm"/><path class="v63ah-ban"/><path class="zq067jsaq"/></g>`,
		"fallback": "withicons-bauhaus:battery-full",
	});
}

export default Component;
