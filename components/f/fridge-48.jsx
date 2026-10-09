import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/batmvgb8l.css';
import '../../css/m/m8rkqbbmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="batmvgb8l"/><path class="m8rkqbbmq"/>`,
		"fallback": "energy-icons:fridge-48",
	});
}

export default Component;
