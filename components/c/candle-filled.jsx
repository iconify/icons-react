import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aviom1boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aviom1boc"/>`,
		"fallback": "reicon:candle-filled",
	});
}

export default Component;
