import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql0ag-0by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql0ag-0by"/>`,
		"fallback": "thesvg-color:experts-exchange",
	});
}

export default Component;
