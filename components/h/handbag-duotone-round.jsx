import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2u6d7biz.css';
import '../../css/m/mehks01rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t2u6d7biz"/><path class="mehks01rk"/></g>`,
		"fallback": "coolicons:handbag-duotone-round",
	});
}

export default Component;
