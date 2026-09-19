import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezkmt2vox.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezkmt2vox"/>`,
		"fallback": "zmdi:cast-connected",
	});
}

export default Component;
