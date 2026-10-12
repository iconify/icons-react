import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zf3bktxud.css';
import '../../css/s/sg_kpgbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zf3bktxud"/><path class="sg_kpgbkv"/></g>`,
		"fallback": "andrsrxn:artboard",
	});
}

export default Component;
