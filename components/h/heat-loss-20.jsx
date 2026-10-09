import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv_v6xgdt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv_v6xgdt"/>`,
		"fallback": "energy-icons:heat-loss-20",
	});
}

export default Component;
