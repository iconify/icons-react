import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxgpe524t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxgpe524t"/>`,
		"fallback": "noviair:cooking-pot-plus",
	});
}

export default Component;
