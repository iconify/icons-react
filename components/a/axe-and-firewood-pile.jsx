import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk6i8-bza.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk6i8-bza"/>`,
		"fallback": "pinhead:axe-and-firewood-pile",
	});
}

export default Component;
