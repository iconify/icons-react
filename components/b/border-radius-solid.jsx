import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejb19ccpq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ejb19ccpq"/>`,
		"fallback": "teenyicons:border-radius-solid",
	});
}

export default Component;
