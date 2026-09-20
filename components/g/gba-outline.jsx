import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4jo3rb0c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4jo3rb0c"/>`,
		"fallback": "teenyicons:gba-outline",
	});
}

export default Component;
