import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpj1v4jjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpj1v4jjg"/>`,
		"fallback": "mingcute:foot-line",
	});
}

export default Component;
