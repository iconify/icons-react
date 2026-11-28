import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrudluyhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrudluyhw"/>`,
		"fallback": "noviair-light:car-clock",
	});
}

export default Component;
