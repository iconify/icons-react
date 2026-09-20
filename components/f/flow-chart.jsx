import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh1y9gbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh1y9gbis"/>`,
		"fallback": "ri:flow-chart",
	});
}

export default Component;
