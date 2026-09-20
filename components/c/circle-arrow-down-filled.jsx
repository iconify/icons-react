import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ervr_zbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ervr_zbjr"/>`,
		"fallback": "reicon:circle-arrow-down-filled",
	});
}

export default Component;
