import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebspqb8ic.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebspqb8ic"/>`,
		"fallback": "teenyicons:folder-plus-outline",
	});
}

export default Component;
