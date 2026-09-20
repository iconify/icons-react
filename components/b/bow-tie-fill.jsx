import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln5cit_qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln5cit_qm"/>`,
		"fallback": "mingcute:bow-tie-fill",
	});
}

export default Component;
