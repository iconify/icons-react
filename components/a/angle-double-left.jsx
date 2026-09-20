import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm2utoh2v.css';
import '../../css/b/bubzgdclu.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm2utoh2v"/><path class="bubzgdclu"/>`,
		"fallback": "lineicons:angle-double-left",
	});
}

export default Component;
