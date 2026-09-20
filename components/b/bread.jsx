import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkn43-b1g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkn43-b1g"/>`,
		"fallback": "marketeq:bread",
	});
}

export default Component;
