import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlhn8ybms.css';
import '../../css/k/k1cse-ckm.css';
import '../../css/i/ik5eqpb1c.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlhn8ybms"/><path class="k1cse-ckm"/><path class="ik5eqpb1c"/>`,
		"fallback": "tabler-flags:cuba",
	});
}

export default Component;
