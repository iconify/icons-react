import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wewio4b2f.css';
import '../../css/c/c8tqhzbrd.css';
import '../../css/t/ttdmdibgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wewio4b2f"/><path class="c8tqhzbrd"/><path class="ttdmdibgv"/></g>`,
		"fallback": "lucide:fish-off",
	});
}

export default Component;
