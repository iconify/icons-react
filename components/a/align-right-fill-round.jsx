import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cual_ub6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cual_ub6w"/>`,
		"fallback": "coolicons:align-right-fill-round",
	});
}

export default Component;
