import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/drh7ykbqj.css';
import '../../css/t/t58ccbcro.css';
import '../../css/f/fy9l77d_f.css';
import '../../css/u/ua4j05bbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="drh7ykbqj"/><path class="t58ccbcro"/><path class="fy9l77d_f"/><path class="ua4j05bbt"/></g>`,
		"fallback": "lucide-extended:dog-duotone",
	});
}

export default Component;
