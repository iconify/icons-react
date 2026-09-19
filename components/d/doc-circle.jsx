import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/druxve_op.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="druxve_op"/>`,
		"fallback": "f7:doc-circle",
	});
}

export default Component;
