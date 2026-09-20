import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf92_rw-s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf92_rw-s"/>`,
		"fallback": "teenyicons:bag-minus-outline",
	});
}

export default Component;
