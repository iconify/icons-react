import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eoh47sb2n.css';
import '../../css/u/ue3e5g9-c.css';
import '../../css/d/d2r59cciv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eoh47sb2n"/><path class="ue3e5g9-c"/><path class="d2r59cciv"/></g>`,
		"fallback": "hugeicons:circle-lock-remove-02",
	});
}

export default Component;
