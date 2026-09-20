import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccs_qsmmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccs_qsmmu"/>`,
		"fallback": "mingcute:fan-fill",
	});
}

export default Component;
