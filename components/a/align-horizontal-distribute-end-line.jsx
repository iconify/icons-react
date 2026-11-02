import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apx89dbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apx89dbgw"/>`,
		"fallback": "mingcute:align-horizontal-distribute-end-line",
	});
}

export default Component;
