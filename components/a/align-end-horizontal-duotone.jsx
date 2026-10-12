import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omls7q6rs.css';
import '../../css/c/c2j2_qbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="omls7q6rs"/><path class="c2j2_qbfj"/></g>`,
		"fallback": "lucide-extended:align-end-horizontal-duotone",
	});
}

export default Component;
