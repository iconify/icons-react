import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg6jjtbel.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qg6jjtbel"/>`,
		"fallback": "teenyicons:double-caret-right-circle-solid",
	});
}

export default Component;
