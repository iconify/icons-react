import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x140d_bvu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x140d_bvu"/>`,
		"fallback": "teenyicons:clipboard-minus-outline",
	});
}

export default Component;
