import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsq92pz-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsq92pz-e"/>`,
		"fallback": "mingcute:homepod-line",
	});
}

export default Component;
