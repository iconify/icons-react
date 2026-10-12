import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4d_cbcla.css';
import '../../css/s/smcd-7qqt.css';
import '../../css/b/bqq9k-tbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u4d_cbcla"/><path class="smcd-7qqt"/><path class="bqq9k-tbv"/></g>`,
		"fallback": "lucide-extended:coffee-duotone",
	});
}

export default Component;
