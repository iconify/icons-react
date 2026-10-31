import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cftlv9b_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cftlv9b_g"/>`,
		"fallback": "coolicons:chart-line-round",
	});
}

export default Component;
