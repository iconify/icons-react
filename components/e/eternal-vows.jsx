import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyyu2o1ak.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyyu2o1ak"/>`,
		"fallback": "selfhst:eternal-vows",
	});
}

export default Component;
