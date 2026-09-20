import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzk7_ll8g.css';
import '../../css/e/ejog3cncc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzk7_ll8g"/><path class="ejog3cncc"/>`,
		"fallback": "temaki:gas-shutoff",
	});
}

export default Component;
