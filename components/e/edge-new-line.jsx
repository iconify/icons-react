import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnk_oc_5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnk_oc_5j"/>`,
		"fallback": "ri:edge-new-line",
	});
}

export default Component;
