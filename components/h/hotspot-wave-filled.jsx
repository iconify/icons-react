import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd8x8dh_y.css';
import '../../css/t/t6iv8tbiq.css';
import '../../css/x/xyg_zebck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd8x8dh_y"/><path class="t6iv8tbiq"/><path class="xyg_zebck"/>`,
		"fallback": "tdesign:hotspot-wave-filled",
	});
}

export default Component;
