import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h66lev3gv.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h66lev3gv"/>`,
		"fallback": "lineicons:backward",
	});
}

export default Component;
