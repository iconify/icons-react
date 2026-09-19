import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egtvu8r9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="egtvu8r9t"/>`,
		"fallback": "griddy-icons:chart-pie",
	});
}

export default Component;
