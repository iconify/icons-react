import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0wtvdbfd.css';
import '../../css/r/rn0avuaev.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0wtvdbfd"/><path class="rn0avuaev"/>`,
		"fallback": "teenyicons:candle-chart-solid",
	});
}

export default Component;
