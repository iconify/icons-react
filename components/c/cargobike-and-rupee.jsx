import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enmz8v5ub.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enmz8v5ub"/>`,
		"fallback": "pinhead:cargobike-and-rupee",
	});
}

export default Component;
