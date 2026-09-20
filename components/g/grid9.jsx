import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc2n97b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc2n97b4p"/>`,
		"fallback": "reicon:grid9",
	});
}

export default Component;
