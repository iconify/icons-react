import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9mxw7bqs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9mxw7bqs"/>`,
		"fallback": "picon:curve",
	});
}

export default Component;
