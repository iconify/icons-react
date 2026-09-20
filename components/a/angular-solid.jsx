import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehxg8b96x.css';
import '../../css/y/yhh61y7yb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehxg8b96x"/><path clip-rule="evenodd" class="yhh61y7yb"/>`,
		"fallback": "teenyicons:angular-solid",
	});
}

export default Component;
