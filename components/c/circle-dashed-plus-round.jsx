import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax1xbl3ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax1xbl3ff"/>`,
		"fallback": "coolicons:circle-dashed-plus-round",
	});
}

export default Component;
