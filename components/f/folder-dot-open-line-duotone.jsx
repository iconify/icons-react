import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/djw9-2b1i.css';
import '../../css/o/o4he8kb_o.css';
import '../../css/z/zjtb9sbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="djw9-2b1i"/><path class="o4he8kb_o"/><path class="zjtb9sbmg"/></g>`,
		"fallback": "solar:folder-dot-open-line-duotone",
	});
}

export default Component;
