import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s36q-6b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s36q-6b-g"/>`,
		"fallback": "thesvg-color:expensify",
	});
}

export default Component;
