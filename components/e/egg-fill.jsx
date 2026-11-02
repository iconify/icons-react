import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bldn_f5bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bldn_f5bn"/>`,
		"fallback": "mingcute:egg-fill",
	});
}

export default Component;
