import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwo5oobls.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwo5oobls"/>`,
		"fallback": "teenyicons:border-outer-outline",
	});
}

export default Component;
