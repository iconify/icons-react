import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_-xw2btr.css';
import '../../css/n/nmu8t-fwz.css';
import '../../css/v/vdtxttb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_-xw2btr wm-shadow"/><path class="nmu8t-fwz wm-k"/><path class="vdtxttb4w wm-k"/>`,
		"fallback": "withicons-pastel:chevron-down",
	});
}

export default Component;
