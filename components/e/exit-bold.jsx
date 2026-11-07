import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv2tejbrr.css';
import '../../css/l/ltreopbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tv2tejbrr"/><path class="ltreopbjj"/>`,
		"fallback": "solar:exit-bold",
	});
}

export default Component;
