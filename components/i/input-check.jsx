import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag-n1-y5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag-n1-y5t"/>`,
		"fallback": "noviair:input-check",
	});
}

export default Component;
