import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv_llbcob.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv_llbcob"/>`,
		"fallback": "medical-icon:cath-lab",
	});
}

export default Component;
