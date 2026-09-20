import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9s6yip2j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9s6yip2j"/>`,
		"fallback": "pinhead:f22-raptor-fighter-jet",
	});
}

export default Component;
