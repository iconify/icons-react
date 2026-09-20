import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be-h8wbdp.css';
import '../../css/u/u7oeflsek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be-h8wbdp"/><path class="u7oeflsek"/>`,
		"fallback": "mingcute:cellphone-2-horizontal-line",
	});
}

export default Component;
