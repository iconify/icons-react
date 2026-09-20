import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfuwwhbkc.css';
import '../../css/c/c82mu65xq.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfuwwhbkc"/><path class="c82mu65xq"/>`,
		"fallback": "medical-icon:anesthesia",
	});
}

export default Component;
