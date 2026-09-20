import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xmnsxcc-k.css';
import '../../css/t/t4zsdr_id.css';
import '../../css/o/od5ylubiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xmnsxcc-k"/><path class="t4zsdr_id"/><path class="od5ylubiq"/></g>`,
		"fallback": "solar:eraser-line-duotone",
	});
}

export default Component;
