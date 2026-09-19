import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hv3q2-gpn.css';
import '../../css/e/eoh47sb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hv3q2-gpn"/><path class="eoh47sb2n"/></g>`,
		"fallback": "hugeicons:circle-lock-add-01",
	});
}

export default Component;
