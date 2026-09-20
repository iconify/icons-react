import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov26wzbtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov26wzbtk"/>`,
		"fallback": "mingcute:indoor-rowing-line",
	});
}

export default Component;
