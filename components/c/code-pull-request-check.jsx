import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx40939my.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qx40939my"/>`,
		"fallback": "gravity-ui:code-pull-request-check",
	});
}

export default Component;
