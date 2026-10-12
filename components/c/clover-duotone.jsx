import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anel9tbgf.css';
import '../../css/c/c11okoi4v.css';
import '../../css/t/tyrt-db1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="anel9tbgf"/><path class="c11okoi4v"/><path class="tyrt-db1e"/></g>`,
		"fallback": "lucide-extended:clover-duotone",
	});
}

export default Component;
