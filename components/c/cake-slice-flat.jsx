import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p43dkub_r.css';
import '../../css/e/e8kcnlb_n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p43dkub_r"/><path class="e8kcnlb_n"/></g>`,
		"fallback": "streamline-flex-color:cake-slice-flat",
	});
}

export default Component;
