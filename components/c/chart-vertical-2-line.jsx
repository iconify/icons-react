import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubzqx4l4f.css';
import '../../css/u/uhypokb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubzqx4l4f"/><path class="uhypokb_j"/>`,
		"fallback": "mingcute:chart-vertical-2-line",
	});
}

export default Component;
