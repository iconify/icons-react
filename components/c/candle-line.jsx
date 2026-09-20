import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe88tlfgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe88tlfgt"/>`,
		"fallback": "mingcute:candle-line",
	});
}

export default Component;
