import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utzl12bfj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utzl12bfj"/>`,
		"fallback": "teenyicons:drop-solid",
	});
}

export default Component;
