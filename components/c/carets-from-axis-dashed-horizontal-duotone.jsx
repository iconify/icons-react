import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8hw0skqh.css';
import '../../css/h/hsqu-sdfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8hw0skqh"/><path class="hsqu-sdfc"/></g>`,
		"fallback": "lucide-extended:carets-from-axis-dashed-horizontal-duotone",
	});
}

export default Component;
