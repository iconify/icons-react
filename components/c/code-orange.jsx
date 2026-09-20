import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mghtvdb9z.css';
import '../../css/s/s_h41w30n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mghtvdb9z"/><path class="s_h41w30n"/>`,
		"fallback": "meteocons:code-orange",
	});
}

export default Component;
