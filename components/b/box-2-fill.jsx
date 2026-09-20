import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf_8a1-qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf_8a1-qn"/>`,
		"fallback": "mingcute:box-2-fill",
	});
}

export default Component;
