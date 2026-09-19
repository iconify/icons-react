import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn1k4o17k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn1k4o17k"/>`,
		"fallback": "fontisto:injection-syringe",
	});
}

export default Component;
