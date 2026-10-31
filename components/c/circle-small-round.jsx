import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d91f4wzgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d91f4wzgq"/>`,
		"fallback": "coolicons:circle-small-round",
	});
}

export default Component;
