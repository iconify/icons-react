import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpv5ewbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bpv5ewbjj"/>`,
		"fallback": "solar:alarm-turn-off-outline",
	});
}

export default Component;
